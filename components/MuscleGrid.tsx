"use client"

import { MuscleCard } from "@/components/MuscleCard"
import { muscleGroupImages } from "@/lib/muscle-images"
import type { StrengthLevel } from "@/lib/strength-calculator"

interface MuscleGridProps {
  muscleStrengths: {
    chest: StrengthLevel
    back: StrengthLevel
    biceps: StrengthLevel
    triceps: StrengthLevel
    legs: StrengthLevel
    core: StrengthLevel
  }
}

export function MuscleGrid({ muscleStrengths }: MuscleGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
      <MuscleCard
        title="Chest"
        image={muscleGroupImages.chest}
        level={muscleStrengths.chest}
      />
      <MuscleCard
        title="Back"
        image={muscleGroupImages.back}
        level={muscleStrengths.back}
      />
      <MuscleCard
        title="Biceps"
        image={muscleGroupImages.biceps}
        level={muscleStrengths.biceps}
      />
      <MuscleCard
        title="Triceps"
        image={muscleGroupImages.triceps}
        level={muscleStrengths.triceps}
      />
      <MuscleCard
        title="Legs"
        image={muscleGroupImages.legs}
        level={muscleStrengths.legs}
      />
      <MuscleCard
        title="Core"
        image={muscleGroupImages.core}
        level={muscleStrengths.core}
      />
    </div>
  )
}
