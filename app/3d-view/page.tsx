"use client"

import { ProtectedLayout } from "@/components/layout/protected-layout"
import { MuscleVisualizationContent } from "@/components/anatomy/muscle-visualization-content"

export default function MuscleVisualizationPage() {
  return (
    <ProtectedLayout>
      <MuscleVisualizationContent />
    </ProtectedLayout>
  )
}
