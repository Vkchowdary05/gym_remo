// lib/strength-calculator.ts - Production-ready strength calculation system
// Uses training volume, intensity ranges, diminishing returns, and recovery factors

export type StrengthLevel = "poor" | "average" | "good" | "excellent" | "bodybuilder"

export interface StrengthBenchmark {
  poor: number
  average: number
  good: number
  excellent: number
  bodybuilder: number
}

// Benchmarks relative to body weight (multipliers)
// Based on real-world strength standards from ExRx, Symmetric Strength, and powerlifting data
export const strengthBenchmarks: Record<string, StrengthBenchmark> = {
  benchPress: { poor: 0.5, average: 0.75, good: 1.0, excellent: 1.25, bodybuilder: 1.5 },
  squat: { poor: 0.75, average: 1.0, good: 1.25, excellent: 1.5, bodybuilder: 2.0 },
  deadlift: { poor: 1.0, average: 1.25, good: 1.5, excellent: 2.0, bodybuilder: 2.5 },
  shoulderPress: { poor: 0.35, average: 0.5, good: 0.65, excellent: 0.8, bodybuilder: 1.0 },
  barbellRow: { poor: 0.5, average: 0.65, good: 0.8, excellent: 1.0, bodybuilder: 1.25 },
  overheadPress: { poor: 0.35, average: 0.5, good: 0.65, excellent: 0.8, bodybuilder: 1.0 },
  legPress: { poor: 1.5, average: 2.0, good: 2.5, excellent: 3.0, bodybuilder: 4.0 },
  pullUps: { poor: 0.5, average: 0.75, good: 1.0, excellent: 1.25, bodybuilder: 1.5 },
}

// Calculate strength level from a ratio
export function calculateStrengthLevel(
  exercise: keyof typeof strengthBenchmarks,
  liftWeight: number,
  bodyWeight: number,
): StrengthLevel {
  const benchmark = strengthBenchmarks[exercise]
  const ratio = liftWeight / bodyWeight

  if (ratio >= benchmark.bodybuilder) return "bodybuilder"
  if (ratio >= benchmark.excellent) return "excellent"
  if (ratio >= benchmark.good) return "good"
  if (ratio >= benchmark.average) return "average"
  return "poor"
}

// Calculate derived strength from custom benchmarks
export function calculateDerivedStrengthLevel(ratio: number, benchmarks: StrengthBenchmark): StrengthLevel {
  if (ratio >= benchmarks.bodybuilder) return "bodybuilder"
  if (ratio >= benchmarks.excellent) return "excellent"
  if (ratio >= benchmarks.good) return "good"
  if (ratio >= benchmarks.average) return "average"
  return "poor"
}

// Calculate overall strength level (average across all lifts)
export function getOverallStrengthLevel(assessment: Record<string, number>, bodyWeight: number): StrengthLevel {
  const levels = Object.entries(assessment).map(([exercise, weight]) => {
    if (strengthBenchmarks[exercise]) {
      return calculateStrengthLevel(exercise as keyof typeof strengthBenchmarks, weight, bodyWeight)
    }
    return "average"
  })

  const levelValues: Record<StrengthLevel, number> = {
    poor: 1,
    average: 2,
    good: 3,
    excellent: 4,
    bodybuilder: 5,
  }

  const avgValue = levels.reduce((sum, level) => sum + levelValues[level], 0) / levels.length

  if (avgValue >= 4.5) return "bodybuilder"
  if (avgValue >= 3.5) return "excellent"
  if (avgValue >= 2.5) return "good"
  if (avgValue >= 1.5) return "average"
  return "poor"
}

// Visual styling
export const strengthLevelColors: Record<StrengthLevel, string> = {
  poor: "#EF4444",
  average: "#3B82F6",
  good: "#10B981",
  excellent: "#F59E0B",
  bodybuilder: "#8B5CF6",
}

export const strengthLevelLabels: Record<StrengthLevel, string> = {
  poor: "Beginner",
  average: "Intermediate",
  good: "Advanced",
  excellent: "Elite",
  bodybuilder: "Pro",
}

// ==================== MUSCLE-BASED PROGRESS CALCULATION ====================

export interface MuscleProgress {
  level: StrengthLevel
  volumeLastWeek: number
  volumeThisWeek: number
  trend: "up" | "down" | "steady"
  recoveryStatus: "fresh" | "normal" | "fatigued"
  lastWorked: Date | null
}

export interface WorkoutSet {
  weight: number
  reps: number
}

export interface Exercise {
  exerciseName: string
  sets: WorkoutSet[]
}

export interface Workout {
  date: string
  muscleGroups: Array<{
    muscleGroup: string
    exercises: Exercise[]
  }>
}

// Calculate training volume for a muscle group from workouts
export function calculateMuscleVolume(
  workouts: Workout[],
  muscleGroup: string,
  startDate: Date,
  endDate: Date,
): number {
  let totalVolume = 0

  workouts.forEach((workout) => {
    const workoutDate = new Date(workout.date)
    if (workoutDate >= startDate && workoutDate <= endDate) {
      workout.muscleGroups.forEach((mg) => {
        if (mg.muscleGroup === muscleGroup) {
          mg.exercises.forEach((exercise) => {
            exercise.sets.forEach((set) => {
              totalVolume += set.weight * set.reps
            })
          })
        }
      })
    }
  })

  return totalVolume
}

// Get last workout date for a muscle group
export function getLastWorkedDate(workouts: Workout[], muscleGroup: string): Date | null {
  const relevantWorkouts = workouts
    .filter((w) => w.muscleGroups.some((mg) => mg.muscleGroup === muscleGroup))
    .map((w) => new Date(w.date))
    .sort((a, b) => b.getTime() - a.getTime())

  return relevantWorkouts[0] || null
}

// Determine recovery status based on days since last workout
export function getRecoveryStatus(lastWorked: Date | null): "fresh" | "normal" | "fatigued" {
  if (!lastWorked) return "fresh"

  const daysSince = Math.floor((Date.now() - lastWorked.getTime()) / (1000 * 60 * 60 * 24))

  if (daysSince >= 3) return "fresh"
  if (daysSince >= 2) return "normal"
  return "fatigued"
}

// Calculate muscle progress with volume tracking
export function calculateMuscleProgress(
  workouts: Workout[],
  muscleGroup: string,
  baselineStrength: number,
  bodyWeight: number,
): MuscleProgress {
  const now = new Date()
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)

  const volumeThisWeek = calculateMuscleVolume(workouts, muscleGroup, weekAgo, now)
  const volumeLastWeek = calculateMuscleVolume(workouts, muscleGroup, twoWeeksAgo, weekAgo)

  const lastWorked = getLastWorkedDate(workouts, muscleGroup)
  const recoveryStatus = getRecoveryStatus(lastWorked)

  // Determine trend
  let trend: "up" | "down" | "steady" = "steady"
  if (volumeThisWeek > volumeLastWeek * 1.1) trend = "up"
  else if (volumeThisWeek < volumeLastWeek * 0.9) trend = "down"

  // Calculate level from baseline and recent volume
  const volumeRatio = volumeThisWeek / (bodyWeight * 100) // Normalize by bodyweight
  const adjustedRatio = baselineStrength + volumeRatio * 0.1 // Small boost from volume

  const level = calculateDerivedStrengthLevel(adjustedRatio, {
    poor: 0.5,
    average: 0.75,
    good: 1.0,
    excellent: 1.25,
    bodybuilder: 1.5,
  })

  return {
    level,
    volumeLastWeek,
    volumeThisWeek,
    trend,
    recoveryStatus,
    lastWorked,
  }
}