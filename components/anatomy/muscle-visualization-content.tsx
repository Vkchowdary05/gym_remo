"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"
import { AnimatedBody } from "@/components/anatomy/animated-body"
import {
  strengthLevelLabels,
  strengthLevelColors,
  type StrengthLevel,
} from "@/lib/strength-calculator"
import { calculateAllMuscleColors } from "@/lib/muscle-color-calculator"
import { Badge } from "@/components/ui/badge"
import { User, Dumbbell } from "lucide-react"

interface HoveredMuscleInfo {
  level: StrengthLevel
}

export function MuscleVisualizationContent() {
  const { profile, strengthAssessment } = useAuth()

  // ✅ SAFELY DERIVED VALUES
  const gender: "male" | "female" =
    profile?.gender === "female" ? "female" : "male"

  const bodyWeight = profile?.weight ?? 70

  // ✅ CALCULATE MUSCLE STRENGTHS (THIS WAS MISSING)
  const muscleStrengths: Record<string, StrengthLevel> =
    calculateAllMuscleColors(
      strengthAssessment,
      bodyWeight,
      gender,
    )

  const [hovered, setHovered] = useState<HoveredMuscleInfo | null>(
    null,
  )

  // Optional subtle re-render on data change
  useEffect(() => {
    setHovered(null)
  }, [strengthAssessment, gender])

  return (
    <div className="relative w-full h-[calc(100vh-120px)] bg-black overflow-hidden">
      {/* CENTER ANIMATED CHARACTER */}
      <AnimatedBody
        muscleStrengths={muscleStrengths}
        gender={gender}
      />

      {/* TOP LEFT — USER INFO */}
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/70 backdrop-blur-md rounded-lg border border-white/20 p-3">
          <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
            <User className="w-4 h-4" />
            <span className="font-medium">Your Profile</span>
          </div>
          <div className="space-y-1 text-xs text-white/60">
            <div className="flex justify-between gap-4">
              <span>Gender</span>
              <span className="text-white capitalize">
                {gender}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span>Weight</span>
              <span className="text-white">
                {bodyWeight} kg
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM — LEGEND */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="bg-black/70 backdrop-blur-md rounded-lg border border-white/20 p-3">
          <div className="space-y-1.5">
            {(
              [
                "poor",
                "average",
                "good",
                "excellent",
                "bodybuilder",
              ] as StrengthLevel[]
            ).map((level) => (
              <div
                key={level}
                className="flex items-center gap-2"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor:
                      strengthLevelColors[level],
                  }}
                />
                <span className="text-xs text-white/80">
                  {strengthLevelLabels[level]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OPTIONAL HOVER CARD (READY FOR FUTURE) */}
      {hovered && (
        <div className="absolute bottom-20 left-4 z-10">
          <div className="bg-black/80 backdrop-blur-md rounded-lg border border-white/20 p-3">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-white" />
              <Badge
                style={{
                  backgroundColor:
                    strengthLevelColors[hovered.level],
                }}
              >
                {strengthLevelLabels[hovered.level]}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
