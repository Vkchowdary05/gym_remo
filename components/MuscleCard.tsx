"use client"

import type { StrengthLevel } from "@/lib/strength-calculator"

interface MuscleCardProps {
  title: string
  image: string
  level: StrengthLevel
}

export function MuscleCard({ title, image, level }: MuscleCardProps) {
  return (
    <div className="rounded-xl bg-white shadow-md p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105">
      
      <img
        src={image}
        alt={title}
        className="h-32 object-contain mb-3"
      />

      <h3 className="text-lg font-semibold">{title}</h3>

      <span className="mt-1 text-sm text-gray-600">
        Strength: <strong className="capitalize">{level}</strong>
      </span>
    </div>
  )
}
