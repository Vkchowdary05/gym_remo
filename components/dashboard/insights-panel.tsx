// components/dashboard/insights-panel.tsx - Real-world actionable insights
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Info, TrendingUp, Activity, Target } from "lucide-react"
import type { MuscleBalanceInsight, MuscleCardData } from "@/lib/muscle-progress"

interface InsightsPanelProps {
  insights: MuscleBalanceInsight[]
  muscles: MuscleCardData[]
}

export function InsightsPanel({ insights, muscles }: InsightsPanelProps) {
  // Calculate summary stats
  const totalVolume = muscles.reduce((sum, m) => sum + m.volumeThisWeek, 0)
  const avgVolumeChange = muscles.reduce((sum, m) => {
    const change = m.volumeLastWeek > 0 
      ? ((m.volumeThisWeek - m.volumeLastWeek) / m.volumeLastWeek) * 100 
      : 0
    return sum + change
  }, 0) / muscles.length

  const trendingUp = muscles.filter(m => m.trend === "up").length
  const needsAttention = muscles.filter(m => m.recoveryStatus === "fatigued" || m.level === "poor").length

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Weekly Volume</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-card-foreground">
                    {(totalVolume / 1000).toFixed(1)}k
                  </span>
                  <span className="text-xs text-muted-foreground">kg</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Trending Up</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-card-foreground">{trendingUp}</span>
                  <span className="text-xs text-muted-foreground">muscles</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Needs Focus</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-card-foreground">{needsAttention}</span>
                  <span className="text-xs text-muted-foreground">areas</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Insights & Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {insights.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <p className="font-medium">Everything looks great!</p>
              <p className="text-sm mt-1">Keep up your balanced training approach.</p>
            </div>
          ) : (
            insights.map((insight, index) => (
              <InsightAlert key={index} insight={insight} />
            ))
          )}
        </CardContent>
      </Card>

      {/* Weekly Comparison */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Week-over-Week Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {muscles.map(muscle => {
              const volumeChange = muscle.volumeLastWeek > 0 
                ? ((muscle.volumeThisWeek - muscle.volumeLastWeek) / muscle.volumeLastWeek) * 100 
                : 0

              return (
                <div key={muscle.name} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-card-foreground">{muscle.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {muscle.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {(muscle.volumeThisWeek / 1000).toFixed(1)}k kg
                    </span>
                    <Badge 
                      variant="outline"
                      className={
                        volumeChange > 0 
                          ? "bg-green-500/10 text-green-500 border-green-500/20" 
                          : volumeChange < 0 
                          ? "bg-red-500/10 text-red-500 border-red-500/20"
                          : "bg-muted text-muted-foreground"
                      }
                    >
                      {volumeChange > 0 && "+"}{volumeChange.toFixed(0)}%
                    </Badge>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function InsightAlert({ insight }: { insight: MuscleBalanceInsight }) {
  const config = {
    warning: {
      icon: AlertCircle,
      variant: "default" as const,
      className: "border-orange-500/50 bg-orange-500/5",
      iconClass: "text-orange-500"
    },
    info: {
      icon: Info,
      variant: "default" as const,
      className: "border-blue-500/50 bg-blue-500/5",
      iconClass: "text-blue-500"
    },
    success: {
      icon: CheckCircle,
      variant: "default" as const,
      className: "border-green-500/50 bg-green-500/5",
      iconClass: "text-green-500"
    }
  }

  const { icon: Icon, variant, className, iconClass } = config[insight.type]

  return (
    <Alert variant={variant} className={className}>
      <Icon className={`h-4 w-4 ${iconClass}`} />
      <AlertTitle>{insight.title}</AlertTitle>
      <AlertDescription>{insight.description}</AlertDescription>
    </Alert>
  )
}