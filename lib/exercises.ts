export type MuscleGroup =
  | "chest"
  | "back"
  | "shoulders"
  | "biceps"
  | "triceps"
  | "legs"
  | "forearms"
  | "cardio"

export interface Exercise {
  id: string
  name: string
  muscleGroup: MuscleGroup
  description?: string
}

export const exercises: Exercise[] = [
  /* ===================== CHEST ===================== */
  { id: "barbell-bench-press", name: "Barbell Bench Press", muscleGroup: "chest" },
  { id: "incline-barbell-press", name: "Incline Barbell Press", muscleGroup: "chest" },
  { id: "decline-barbell-press", name: "Decline Barbell Press", muscleGroup: "chest" },
  { id: "dumbbell-bench-press", name: "Dumbbell Bench Press", muscleGroup: "chest" },
  { id: "incline-dumbbell-press", name: "Incline Dumbbell Press", muscleGroup: "chest" },
  { id: "decline-dumbbell-press", name: "Decline Dumbbell Press", muscleGroup: "chest" },
  { id: "dumbbell-fly", name: "Dumbbell Fly", muscleGroup: "chest" },
  { id: "incline-dumbbell-fly", name: "Incline Dumbbell Fly", muscleGroup: "chest" },
  { id: "cable-crossover", name: "Cable Crossover", muscleGroup: "chest" },
  { id: "low-to-high-cable-fly", name: "Low to High Cable Fly", muscleGroup: "chest" },
  { id: "pec-deck", name: "Pec Deck Machine", muscleGroup: "chest" },
  { id: "push-ups", name: "Push-ups", muscleGroup: "chest" },
  { id: "weighted-push-ups", name: "Weighted Push-ups", muscleGroup: "chest" },
  { id: "chest-dips", name: "Chest Dips", muscleGroup: "chest" },

  /* ===================== BACK ===================== */
  { id: "deadlift", name: "Deadlift", muscleGroup: "back" },
  { id: "rack-pull", name: "Rack Pull", muscleGroup: "back" },
  { id: "pull-ups", name: "Pull-ups", muscleGroup: "back" },
  { id: "chin-ups", name: "Chin-ups", muscleGroup: "back" },
  { id: "lat-pulldown-wide", name: "Wide Grip Lat Pulldown", muscleGroup: "back" },
  { id: "lat-pulldown-close", name: "Close Grip Lat Pulldown", muscleGroup: "back" },
  { id: "barbell-row", name: "Barbell Row", muscleGroup: "back" },
  { id: "pendlay-row", name: "Pendlay Row", muscleGroup: "back" },
  { id: "seated-cable-row", name: "Seated Cable Row", muscleGroup: "back" },
  { id: "single-arm-dumbbell-row", name: "Single Arm Dumbbell Row", muscleGroup: "back" },
  { id: "t-bar-row", name: "T-Bar Row", muscleGroup: "back" },
  { id: "face-pull", name: "Face Pull", muscleGroup: "back" },
  { id: "straight-arm-pulldown", name: "Straight Arm Pulldown", muscleGroup: "back" },
  { id: "hyperextension", name: "Back Extension", muscleGroup: "back" },

  /* ===================== SHOULDERS ===================== */
  { id: "overhead-barbell-press", name: "Overhead Barbell Press", muscleGroup: "shoulders" },
  { id: "dumbbell-shoulder-press", name: "Dumbbell Shoulder Press", muscleGroup: "shoulders" },
  { id: "arnold-press", name: "Arnold Press", muscleGroup: "shoulders" },
  { id: "lateral-raise", name: "Lateral Raise", muscleGroup: "shoulders" },
  { id: "cable-lateral-raise", name: "Cable Lateral Raise", muscleGroup: "shoulders" },
  { id: "front-raise", name: "Front Raise", muscleGroup: "shoulders" },
  { id: "rear-delt-fly", name: "Rear Delt Fly", muscleGroup: "shoulders" },
  { id: "reverse-pec-deck", name: "Reverse Pec Deck", muscleGroup: "shoulders" },
  { id: "upright-row", name: "Upright Row", muscleGroup: "shoulders" },
  { id: "shrugs", name: "Shrugs", muscleGroup: "shoulders" },

  /* ===================== BICEPS ===================== */
  { id: "barbell-curl", name: "Barbell Curl", muscleGroup: "biceps" },
  { id: "ez-bar-curl", name: "EZ Bar Curl", muscleGroup: "biceps" },
  { id: "dumbbell-curl", name: "Dumbbell Curl", muscleGroup: "biceps" },
  { id: "alternating-dumbbell-curl", name: "Alternating Dumbbell Curl", muscleGroup: "biceps" },
  { id: "hammer-curl", name: "Hammer Curl", muscleGroup: "biceps" },
  { id: "cross-body-hammer-curl", name: "Cross Body Hammer Curl", muscleGroup: "biceps" },
  { id: "preacher-curl", name: "Preacher Curl", muscleGroup: "biceps" },
  { id: "incline-dumbbell-curl", name: "Incline Dumbbell Curl", muscleGroup: "biceps" },
  { id: "concentration-curl", name: "Concentration Curl", muscleGroup: "biceps" },
  { id: "cable-curl", name: "Cable Curl", muscleGroup: "biceps" },

  /* ===================== TRICEPS ===================== */
  { id: "close-grip-bench-press", name: "Close Grip Bench Press", muscleGroup: "triceps" },
  { id: "skull-crushers", name: "Skull Crushers", muscleGroup: "triceps" },
  { id: "ez-bar-skull-crusher", name: "EZ Bar Skull Crusher", muscleGroup: "triceps" },
  { id: "tricep-pushdown", name: "Tricep Pushdown", muscleGroup: "triceps" },
  { id: "rope-pushdown", name: "Rope Pushdown", muscleGroup: "triceps" },
  { id: "overhead-tricep-extension", name: "Overhead Tricep Extension", muscleGroup: "triceps" },
  { id: "single-arm-overhead-extension", name: "Single Arm Overhead Extension", muscleGroup: "triceps" },
  { id: "bench-dips", name: "Bench Dips", muscleGroup: "triceps" },
  { id: "diamond-push-ups", name: "Diamond Push-ups", muscleGroup: "triceps" },
  { id: "tricep-kickback", name: "Tricep Kickback", muscleGroup: "triceps" },

  /* ===================== LEGS ===================== */
  { id: "back-squat", name: "Back Squat", muscleGroup: "legs" },
  { id: "front-squat", name: "Front Squat", muscleGroup: "legs" },
  { id: "hack-squat", name: "Hack Squat", muscleGroup: "legs" },
  { id: "leg-press", name: "Leg Press", muscleGroup: "legs" },
  { id: "walking-lunges", name: "Walking Lunges", muscleGroup: "legs" },
  { id: "reverse-lunges", name: "Reverse Lunges", muscleGroup: "legs" },
  { id: "bulgarian-split-squat", name: "Bulgarian Split Squat", muscleGroup: "legs" },
  { id: "romanian-deadlift", name: "Romanian Deadlift", muscleGroup: "legs" },
  { id: "leg-extension", name: "Leg Extension", muscleGroup: "legs" },
  { id: "lying-leg-curl", name: "Lying Leg Curl", muscleGroup: "legs" },
  { id: "seated-leg-curl", name: "Seated Leg Curl", muscleGroup: "legs" },
  { id: "standing-calf-raise", name: "Standing Calf Raise", muscleGroup: "legs" },
  { id: "seated-calf-raise", name: "Seated Calf Raise", muscleGroup: "legs" },
  { id: "hip-thrust", name: "Hip Thrust", muscleGroup: "legs" },

  /* ===================== FOREARMS ===================== */
  { id: "wrist-curl", name: "Wrist Curl", muscleGroup: "forearms" },
  { id: "reverse-wrist-curl", name: "Reverse Wrist Curl", muscleGroup: "forearms" },
  { id: "behind-the-back-wrist-curl", name: "Behind the Back Wrist Curl", muscleGroup: "forearms" },
  { id: "farmer-walk", name: "Farmer’s Walk", muscleGroup: "forearms" },
  { id: "plate-pinch-hold", name: "Plate Pinch Hold", muscleGroup: "forearms" },
  { id: "dead-hang", name: "Dead Hang", muscleGroup: "forearms" },

  /* ===================== CARDIO ===================== */
  { id: "treadmill-walk", name: "Treadmill Walk", muscleGroup: "cardio" },
  { id: "treadmill-run", name: "Treadmill Run", muscleGroup: "cardio" },
  { id: "cycling", name: "Stationary Cycling", muscleGroup: "cardio" },
  { id: "rowing-machine", name: "Rowing Machine", muscleGroup: "cardio" },
  { id: "elliptical", name: "Elliptical Trainer", muscleGroup: "cardio" },
  { id: "stair-climber", name: "Stair Climber", muscleGroup: "cardio" },
  { id: "jump-rope", name: "Jump Rope", muscleGroup: "cardio" },
  { id: "battle-ropes", name: "Battle Ropes", muscleGroup: "cardio" },
  { id: "sled-push", name: "Sled Push", muscleGroup: "cardio" },
]

export const getExercisesByMuscleGroup = (muscleGroup: MuscleGroup): Exercise[] =>
  exercises.filter((e) => e.muscleGroup === muscleGroup)

export const muscleGroupLabels: Record<MuscleGroup, string> = {
  chest: "Chest",
  back: "Back",
  shoulders: "Shoulders",
  biceps: "Biceps",
  triceps: "Triceps",
  legs: "Legs",
  forearms: "Forearms",
  cardio: "Cardio",
}
