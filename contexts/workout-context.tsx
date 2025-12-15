"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useAuth } from "./auth-context"
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  orderBy,
  where,
  serverTimestamp,
  type Timestamp
} from "firebase/firestore"
import { db } from "@/lib/firebase"

export type MuscleGroup = "chest" | "back" | "shoulders" | "biceps" | "triceps" | "legs" | "forearms" | "cardio"

export interface WorkoutSet {
  weight: number
  reps: number
}

export interface ExerciseEntry {
  exerciseId: string
  exerciseName: string
  sets: WorkoutSet[]
}

export interface MuscleGroupEntry {
  muscleGroup: MuscleGroup
  exercises: ExerciseEntry[]
}

export interface Workout {
  id: string
  date: string
  muscleGroups: MuscleGroupEntry[]
  totalVolume: number
  totalSets: number
  notes?: string
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

interface WorkoutContextType {
  workouts: Workout[]
  loading: boolean
  error: string | null
  addWorkout: (workout: Omit<Workout, "id">) => Promise<void>
  updateWorkout: (id: string, workout: Partial<Workout>) => Promise<void>
  deleteWorkout: (id: string) => Promise<void>
  getWorkout: (id: string) => Workout | undefined
  getRecentWorkouts: (limit?: number) => Workout[]
  getWorkoutsByDateRange: (start: Date, end: Date) => Workout[]
  getPersonalRecords: () => Record<string, { weight: number; date: string }>
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined)

export function WorkoutProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch workouts when user changes
  useEffect(() => {
    if (user) {
      fetchWorkouts()
    } else {
      setWorkouts([])
      setLoading(false)
    }
  }, [user])

  const fetchWorkouts = async () => {
    if (!user) return

    setLoading(true)
    setError(null)
    
    try {
      const workoutsRef = collection(db, `users/${user.uid}/workouts`)
      const q = query(workoutsRef, orderBy("date", "desc"))
      const querySnapshot = await getDocs(q)

      const fetchedWorkouts: Workout[] = []
      querySnapshot.forEach((doc) => {
        fetchedWorkouts.push({
          id: doc.id,
          ...doc.data()
        } as Workout)
      })

      setWorkouts(fetchedWorkouts)
    } catch (err: any) {
      console.error("Error fetching workouts:", err)
      setError(err.message || "Failed to fetch workouts.")
    } finally {
      setLoading(false)
    }
  }

  const addWorkout = async (workout: Omit<Workout, "id">) => {
    if (!user) throw new Error("User must be authenticated")

    try {
      const workoutsRef = collection(db, `users/${user.uid}/workouts`)
      const workoutData = {
        ...workout,
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }

      const docRef = await addDoc(workoutsRef, workoutData)

      const newWorkout: Workout = {
        ...workout,
        id: docRef.id
      }

      setWorkouts(prev => [newWorkout, ...prev])
    } catch (err: any) {
      console.error("Error adding workout:", err)
      setError(err.message || "Failed to add workout.")
      throw err
    }
  }

  const updateWorkout = async (id: string, updates: Partial<Workout>) => {
    if (!user) throw new Error("User must be authenticated")

    try {
      const workoutRef = doc(db, `users/${user.uid}/workouts/${id}`)
      const updateData = {
        ...updates,
        updatedAt: serverTimestamp()
      }

      await updateDoc(workoutRef, updateData)

      setWorkouts(prev =>
        prev.map(w => (w.id === id ? { ...w, ...updates } : w))
      )
    } catch (err: any) {
      console.error("Error updating workout:", err)
      setError(err.message || "Failed to update workout.")
      throw err
    }
  }

  const deleteWorkout = async (id: string) => {
    if (!user) throw new Error("User must be authenticated")

    try {
      const workoutRef = doc(db, `users/${user.uid}/workouts/${id}`)
      await deleteDoc(workoutRef)

      setWorkouts(prev => prev.filter(w => w.id !== id))
    } catch (err: any) {
      console.error("Error deleting workout:", err)
      setError(err.message || "Failed to delete workout.")
      throw err
    }
  }

  const getWorkout = (id: string) => {
    return workouts.find(w => w.id === id)
  }

  const getRecentWorkouts = (limit = 5) => {
    return workouts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit)
  }

  const getWorkoutsByDateRange = (start: Date, end: Date) => {
    return workouts.filter(w => {
      const date = new Date(w.date)
      return date >= start && date <= end
    })
  }

  const getPersonalRecords = () => {
    const records: Record<string, { weight: number; date: string }> = {}

    workouts.forEach(workout => {
      workout.muscleGroups.forEach(mg => {
        mg.exercises.forEach(exercise => {
          const maxWeight = Math.max(...exercise.sets.map(s => s.weight))
          const key = exercise.exerciseName

          if (!records[key] || records[key].weight < maxWeight) {
            records[key] = { weight: maxWeight, date: workout.date }
          }
        })
      })
    })

    return records
  }

  return (
    <WorkoutContext.Provider
      value={{
        workouts,
        loading,
        error,
        addWorkout,
        updateWorkout,
        deleteWorkout,
        getWorkout,
        getRecentWorkouts,
        getWorkoutsByDateRange,
        getPersonalRecords,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  )
}

export function useWorkouts() {
  const context = useContext(WorkoutContext)
  if (context === undefined) {
    throw new Error("useWorkouts must be used within a WorkoutProvider")
  }
  return context
}