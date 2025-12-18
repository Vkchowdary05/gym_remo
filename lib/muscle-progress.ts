// lib/muscle-progress.ts - Aggregate workout data into muscle-based progress
import { 
  type StrengthLevel,
  calculateDerivedStrengthLevel,getRecoveryStatus
} from "./strength-calculator"

// Re-export MuscleCardData here to avoid circular dependency
export interface MuscleCardData {
  name: string
  level: StrengthLevel
  volumeThisWeek: number
  volumeLastWeek: number
  trend: "up" | "down" | "steady"
  recoveryStatus: "fresh" | "normal" | "fatigued"
  lastWorked: Date | null
}

export type MuscleGroup = "chest" | "back" | "shoulders" | "biceps" | "triceps" | "legs" | "core"

export interface Workout {
  id: string
  date: string
  muscleGroups: Array<{
    muscleGroup: string
    exercises: Array<{
      exerciseName: string
      sets: Array<{ weight: number; reps: number }>
    }>
  }>
}

// Map exercise muscle groups to our standard muscle groups
const muscleGroupMapping: Record<string, MuscleGroup> = {
  chest: "chest",
  back: "back",
  shoulders: "shoulders",
  biceps: "biceps",
  triceps: "triceps",
  legs: "legs",
  forearms: "biceps", // Group with arms
  cardio: "core", // Group with core
}

// Baseline strength ratios from strength assessment
interface StrengthAssessment {
  benchPress: number
  squat: number
  deadlift: number
  shoulderPress: number
  barbellRow: number
  overheadPress: number
  legPress: number
  pullUps: number
}

// Calculate muscle group strength levels from assessment
function getMuscleBaselineStrength(
  assessment: StrengthAssessment | null,
  muscleGroup: MuscleGroup,
  bodyWeight: number
): number {
  if (!assessment) return 0.75 // Default to average

  const ratios: Record<MuscleGroup, number> = {
    chest: assessment.benchPress / bodyWeight,
    back: ((assessment.barbellRow + assessment.pullUps * bodyWeight) / 2) / bodyWeight,
    shoulders: assessment.shoulderPress / bodyWeight,
    biceps: assessment.barbellRow / bodyWeight * 0.6,
    triceps: assessment.benchPress / bodyWeight * 0.6,
    legs: ((assessment.squat + assessment.legPress * 0.5) / 2) / bodyWeight,
    core: ((assessment.squat + assessment.deadlift) / 2) / bodyWeight * 0.5,
  }

  return ratios[muscleGroup] || 0.75
}

// Get friendly muscle group name
const muscleGroupLabels: Record<MuscleGroup, string> = {
  chest: "Chest",
  back: "Back",
  shoulders: "Shoulders",
  biceps: "Biceps",
  triceps: "Triceps",
  legs: "Legs",
  core: "Core",
}

// Calculate progress for all muscle groups
export function calculateAllMuscleProgress(
  workouts: Workout[],
  strengthAssessment: StrengthAssessment | null,
  bodyWeight: number
): MuscleCardData[] {
  const muscleGroups: MuscleGroup[] = ["chest", "back", "shoulders", "biceps", "triceps", "legs", "core"]
  
  const now = new Date()
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)

  return muscleGroups.map(muscleGroup => {
    // Calculate volumes
    const volumeThisWeek = calculateMuscleVolumeForGroup(workouts, muscleGroup, weekAgo, now)
    const volumeLastWeek = calculateMuscleVolumeForGroup(workouts, muscleGroup, twoWeeksAgo, weekAgo)

    // Get last worked date
    const lastWorked = getLastWorkedDateForGroup(workouts, muscleGroup)
    const recoveryStatus = getRecoveryStatus(lastWorked)

    // Determine trend
    let trend: "up" | "down" | "steady" = "steady"
    if (volumeThisWeek > volumeLastWeek * 1.1) trend = "up"
    else if (volumeThisWeek < volumeLastWeek * 0.9) trend = "down"

    // Calculate strength level
    const baselineStrength = getMuscleBaselineStrength(strengthAssessment, muscleGroup, bodyWeight)
    const volumeBoost = (volumeThisWeek / (bodyWeight * 100)) * 0.1
    const adjustedRatio = baselineStrength + volumeBoost

    const level = calculateDerivedStrengthLevel(adjustedRatio, {
      poor: 0.5,
      average: 0.75,
      good: 1.0,
      excellent: 1.25,
      bodybuilder: 1.5,
    })

    return {
      name: muscleGroupLabels[muscleGroup],
      level,
      volumeThisWeek,
      volumeLastWeek,
      trend,
      recoveryStatus,
      lastWorked,
    }
  })
}

// Helper: Calculate volume for a muscle group in date range
function calculateMuscleVolumeForGroup(
  workouts: Workout[],
  muscleGroup: MuscleGroup,
  startDate: Date,
  endDate: Date
): number {
  let totalVolume = 0

  workouts.forEach(workout => {
    const workoutDate = new Date(workout.date)
    if (workoutDate >= startDate && workoutDate <= endDate) {
      workout.muscleGroups.forEach(mg => {
        const mappedGroup = muscleGroupMapping[mg.muscleGroup]
        if (mappedGroup === muscleGroup) {
          mg.exercises.forEach(exercise => {
            exercise.sets.forEach(set => {
              totalVolume += set.weight * set.reps
            })
          })
        }
      })
    }
  })

  return totalVolume
}

// Helper: Get last worked date for a muscle group
function getLastWorkedDateForGroup(workouts: Workout[], muscleGroup: MuscleGroup): Date | null {
  const relevantWorkouts = workouts
    .filter(w => w.muscleGroups.some(mg => muscleGroupMapping[mg.muscleGroup] === muscleGroup))
    .map(w => new Date(w.date))
    .sort((a, b) => b.getTime() - a.getTime())

  return relevantWorkouts[0] || null
}

// Calculate muscle balance insights
export interface MuscleBalanceInsight {
  type: "warning" | "info" | "success"
  title: string
  description: string
}

export function calculateMuscleBalanceInsights(
  muscles: MuscleCardData[]
): MuscleBalanceInsight[] {
  const insights: MuscleBalanceInsight[] = []

  // Find muscle by name
  const findMuscle = (name: string) => muscles.find(m => m.name === name)

  const chest = findMuscle("Chest")
  const back = findMuscle("Back")
  const legs = findMuscle("Legs")
  const shoulders = findMuscle("Shoulders")

  // Push vs Pull balance
  if (chest && back) {
    const chestVolume = chest.volumeThisWeek
    const backVolume = back.volumeThisWeek
    
    if (chestVolume > backVolume * 1.3) {
      insights.push({
        type: "warning",
        title: "Push/Pull Imbalance",
        description: "Chest volume is significantly higher than back. Consider adding more pulling exercises to maintain balance.",
      })
    } else if (backVolume > chestVolume * 1.3) {
      insights.push({
        type: "warning",
        title: "Push/Pull Imbalance",
        description: "Back volume is significantly higher than chest. Consider adding more pressing exercises.",
      })
    }
  }

  // Upper vs Lower balance
  if (chest && back && shoulders && legs) {
    const upperVolume = chest.volumeThisWeek + back.volumeThisWeek + shoulders.volumeThisWeek
    const lowerVolume = legs.volumeThisWeek
    
    if (upperVolume > lowerVolume * 2) {
      insights.push({
        type: "warning",
        title: "Upper/Lower Imbalance",
        description: "Upper body volume is much higher than legs. Don't skip leg day!",
      })
    } else if (lowerVolume > upperVolume * 1.5) {
      insights.push({
        type: "info",
        title: "Leg Focus Detected",
        description: "You're prioritizing legs this week. Great for athletic development!",
      })
    }
  }

  // Overtraining detection
  const highVolumeCount = muscles.filter(m => {
    const volumeIncrease = m.volumeLastWeek > 0 
      ? (m.volumeThisWeek - m.volumeLastWeek) / m.volumeLastWeek 
      : 0
    return volumeIncrease > 0.5 // 50% increase
  }).length

  if (highVolumeCount >= 3) {
    insights.push({
      type: "warning",
      title: "High Volume Detected",
      description: "Multiple muscle groups show large volume increases. Monitor recovery and consider a deload if needed.",
    })
  }

  // Recovery warnings
  const fatiguedCount = muscles.filter(m => m.recoveryStatus === "fatigued").length
  if (fatiguedCount >= 3) {
    insights.push({
      type: "warning",
      title: "Recovery Alert",
      description: `${fatiguedCount} muscle groups are fatigued. Consider rest or active recovery.`,
    })
  }

  // Positive feedback
  const trendingUpCount = muscles.filter(m => m.trend === "up").length
  if (trendingUpCount >= 4) {
    insights.push({
      type: "success",
      title: "Great Progress!",
      description: "Multiple muscle groups showing upward trends. Keep up the excellent work!",
    })
  }

  // Lagging muscle groups
  const levelValues: Record<StrengthLevel, number> = {
    poor: 1,
    average: 2,
    good: 3,
    excellent: 4,
    bodybuilder: 5,
  }

  const avgLevel = muscles.reduce((sum, m) => sum + levelValues[m.level], 0) / muscles.length
  const laggingMuscles = muscles.filter(m => levelValues[m.level] < avgLevel - 0.5)

  if (laggingMuscles.length > 0) {
    insights.push({
      type: "info",
      title: "Focus Suggestion",
      description: `Consider prioritizing: ${laggingMuscles.map(m => m.name).join(", ")} to improve overall balance.`,
    })
  }

  return insights
}