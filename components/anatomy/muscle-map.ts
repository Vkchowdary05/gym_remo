// Central mapping between logical muscle keys
// and the simplified animated character parts

export type AnimatedMusclePart =
  | "head"
  | "neck"
  | "chest"
  | "abs"
  | "shoulders"
  | "biceps"
  | "forearms"
  | "quads"
  | "calves"
  | "glutes"

export const muscleMap: Record<AnimatedMusclePart, string[]> = {
  head: ["neck"],

  neck: ["neck"],

  shoulders: [
    "shoulder_left",
    "shoulder_right",
    "rear_delts",
  ],

  chest: [
    "chest_left",
    "chest_right",
  ],

  abs: [
    "abs",
    "obliques",
    "serratus",
  ],

  biceps: [
    "bicep_left",
    "bicep_right",
    "tricep_left",
    "tricep_right",
  ],

  forearms: [
    "forearm_left",
    "forearm_right",
  ],

  quads: [
    "quad_left",
    "quad_right",
    "adductors",
    "hamstring_left",
    "hamstring_right",
  ],

  calves: [
    "calf_left",
    "calf_right",
    "tibialis",
  ],

  glutes: [
    "glute_left",
    "glute_right",
    "lower_back",
  ],
}
