"use client"

import { Badge } from "@/components/ui/badge"
import {
  strengthLevelLabels,
  strengthLevelColors,
  type StrengthLevel,
} from "@/lib/strength-calculator"
import { cn } from "@/lib/utils"

interface MuscleCardProps {
  name: string
  level: StrengthLevel
}

function MuscleCard({ name, level }: MuscleCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-6 border transition-all duration-300",
        "bg-card text-card-foreground",
        "hover:scale-[1.02] hover:shadow-xl",
        "border-border",
      )}
    >
      {/* Gradient overlay (theme-aware) */}
      <div
        className="absolute inset-0 rounded-2xl opacity-10"
        style={{ backgroundColor: strengthLevelColors[level] }}
      />

      <div className="relative z-10 flex flex-col gap-4">
        <h3 className="text-xl font-semibold tracking-wide">
          {name}
        </h3>

        <Badge
          style={{ backgroundColor: strengthLevelColors[level] }}
          className="w-fit"
        >
          {strengthLevelLabels[level]}
        </Badge>
      </div>
    </div>
  )
}

interface MuscleCardsProps {
  strengths: Record<string, StrengthLevel>
}

export function MuscleCards({ strengths }: MuscleCardsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <MuscleCard name="Chest" level={strengths.chest ?? "average"} />
      <MuscleCard name="Back" level={strengths.back ?? "average"} />
      <MuscleCard name="Legs" level={strengths.legs ?? "average"} />
      <MuscleCard name="Biceps" level={strengths.biceps ?? "average"} />
      <MuscleCard name="Triceps" level={strengths.triceps ?? "average"} />
    </div>
  )
}
