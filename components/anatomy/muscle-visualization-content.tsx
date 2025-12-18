"use client"

import { useEffect } from "react"
import { useAuth } from "@/contexts/auth-context"
import { calculateAllMuscleColors } from "@/lib/muscle-color-calculator"
import { MuscleCards } from "@/components/anatomy/muscle-cards"

export function MuscleVisualizationContent() {
  const { profile, strengthAssessment } = useAuth()

  const gender =
    profile?.gender === "female" ? "female" : "male"

  const bodyWeight = profile?.weight ?? 70

  const muscleStrengths = calculateAllMuscleColors(
    strengthAssessment,
    bodyWeight,
    gender,
  )

  return (
    <div className="w-full min-h-[calc(100vh-120px)]">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Muscle Strength Overview
        </h1>
        <p className="text-muted-foreground mt-2">
          Your strength levels by muscle group
        </p>
      </div>

      {/* Cards */}
      <MuscleCards strengths={muscleStrengths} />
    </div>
  )
}
