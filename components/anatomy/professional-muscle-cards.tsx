// components/anatomy/professional-muscle-cards.tsx
"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { strengthLevelLabels, strengthLevelColors, type StrengthLevel } from "@/lib/strength-calculator"
import { TrendingUp, TrendingDown, Minus, Activity, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

// Import MuscleCardData from lib to avoid circular dependency
export type { MuscleCardData } from "@/lib/muscle-progress"

interface ProfessionalMuscleCardsProps {
  muscles: Array<{
    name: string
    level: StrengthLevel
    volumeThisWeek: number
    volumeLastWeek: number
    trend: "up" | "down" | "steady"
    recoveryStatus: "fresh" | "normal" | "fatigued"
    lastWorked: Date | null
  }>
}

// Main export
export function ProfessionalMuscleCards({ muscles }: ProfessionalMuscleCardsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {muscles.map((muscle) => (
        <MuscleCard key={muscle.name} data={muscle} />
      ))}
    </div>
  )
}

function MuscleCard({ data }: { data: ProfessionalMuscleCardsProps['muscles'][0] }) {
  const { name, level, volumeThisWeek, volumeLastWeek, trend, recoveryStatus, lastWorked } = data

  const volumeChange = volumeLastWeek > 0 
    ? ((volumeThisWeek - volumeLastWeek) / volumeLastWeek) * 100 
    : 0

  const daysSinceWorkout = lastWorked 
    ? Math.floor((Date.now() - lastWorked.getTime()) / (1000 * 60 * 60 * 24))
    : null

  return (
    <Card 
      className={cn(
        "group relative overflow-hidden border transition-all duration-300",
        "hover:shadow-lg hover:-translate-y-1",
        "bg-card border-border"
      )}
    >
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
        style={{ 
          background: `linear-gradient(135deg, ${strengthLevelColors[level]}40 0%, transparent 100%)`
        }}
      />

      <CardContent className="relative z-10 p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-card-foreground">
              {name}
            </h3>
            <Badge 
              className="mt-2"
              style={{ 
                backgroundColor: strengthLevelColors[level],
                color: '#fff'
              }}
            >
              {strengthLevelLabels[level]}
            </Badge>
          </div>

          {/* Trend indicator */}
          <div className="flex items-center gap-1">
            {trend === "up" && (
              <div className="flex items-center text-green-500">
                <TrendingUp className="h-5 w-5" />
              </div>
            )}
            {trend === "down" && (
              <div className="flex items-center text-red-500">
                <TrendingDown className="h-5 w-5" />
              </div>
            )}
            {trend === "steady" && (
              <div className="flex items-center text-muted-foreground">
                <Minus className="h-5 w-5" />
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Weekly Volume</span>
            <span className={cn(
              "font-medium",
              volumeChange > 0 && "text-green-500",
              volumeChange < 0 && "text-red-500"
            )}>
              {volumeChange > 0 && "+"}{volumeChange.toFixed(0)}%
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-500 rounded-full"
              style={{ 
                width: `${Math.min((volumeThisWeek / (volumeLastWeek || 1000)) * 50, 100)}%`,
                backgroundColor: strengthLevelColors[level]
              }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Activity className="h-4 w-4" />
            <span>{(volumeThisWeek / 1000).toFixed(1)}k kg</span>
          </div>
          
          <div className="flex items-center gap-2">
            <RecoveryBadge status={recoveryStatus} />
          </div>
        </div>

        {/* Last worked */}
        {daysSinceWorkout !== null && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t border-border">
            <Clock className="h-3 w-3" />
            <span>
              {daysSinceWorkout === 0 && "Worked today"}
              {daysSinceWorkout === 1 && "Worked yesterday"}
              {daysSinceWorkout > 1 && `${daysSinceWorkout} days ago`}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function RecoveryBadge({ status }: { status: "fresh" | "normal" | "fatigued" }) {
  const config = {
    fresh: {
      label: "Fresh",
      className: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    normal: {
      label: "Normal",
      className: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    fatigued: {
      label: "Fatigued",
      className: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    }
  }

  const { label, className } = config[status]

  return (
    <span className={cn(
      "px-2 py-0.5 rounded-full text-xs font-medium border",
      className
    )}>
      {label}
    </span>
  )
}