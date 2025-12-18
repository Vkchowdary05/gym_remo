// components/anatomy/muscle-visualization-content.tsx - Updated to use professional cards
"use client"

import { useAuth } from "@/contexts/auth-context"
import { useWorkouts } from "@/contexts/workout-context"
import { ProfessionalMuscleCards } from "@/components/anatomy/professional-muscle-cards"
import { calculateAllMuscleProgress } from "@/lib/muscle-progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MuscleVisualizationContent() {
  const { profile, strengthAssessment } = useAuth()
  const { workouts, loading } = useWorkouts()

  const bodyWeight = profile?.weight ?? 70

  // Calculate muscle progress from workouts
  const muscleData = calculateAllMuscleProgress(
    workouts,
    strengthAssessment,
    bodyWeight
  )

  if (loading) {
    return <LoadingSkeleton />
  }

  if (workouts.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="w-full space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Muscle Progress
          </h1>
          <p className="text-muted-foreground mt-2">
            Track your strength development by muscle group
          </p>
        </div>
        <Link href="/add-workout">
          <Button>
            <Dumbbell className="mr-2 h-4 w-4" />
            Add Workout
          </Button>
        </Link>
      </div>

      {/* Muscle Cards */}
      <ProfessionalMuscleCards muscles={muscleData} />

      {/* Info Card */}
      <Card className="bg-muted/50 border-border">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">How it works:</strong> Progress is calculated from your weekly training volume, 
            baseline strength assessment, and recovery status. Keep training consistently to see your levels improve!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function LoadingSkeleton() {
  return (
    <div className="w-full space-y-6">
      <div>
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-4 w-96 mt-2" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-2 w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-16" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function EmptyState() {
  return (
    <Card className="bg-card border-border">
      <CardContent className="py-16">
        <div className="flex flex-col items-center text-center">
          <div className="rounded-full bg-muted p-6 mb-6">
            <Dumbbell className="h-12 w-12 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-card-foreground mb-2">
            No Workout Data Yet
          </h3>
          <p className="text-muted-foreground max-w-md mb-6">
            Start logging your workouts to see muscle-specific progress, trends, and recovery status.
          </p>
          <Link href="/add-workout">
            <Button size="lg">
              <Dumbbell className="mr-2 h-4 w-4" />
              Log Your First Workout
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}