"use client"

import { useEffect, useState } from "react"
import {
  strengthLevelColors,
  type StrengthLevel,
} from "@/lib/strength-calculator"

interface AnimatedBodyProps {
  muscleStrengths: Record<string, StrengthLevel>
  gender: "male" | "female"
}

export function AnimatedBody({
  muscleStrengths,
}: AnimatedBodyProps) {
  const [breath, setBreath] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setBreath((b) => !b)
    }, 1500)
    return () => clearInterval(id)
  }, [])

  const getColor = (key: string) =>
    strengthLevelColors[muscleStrengths[key] || "average"]

  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-b from-gray-50 to-gray-100">
      <svg
        viewBox="0 0 300 700"
        className="w-full h-full max-w-md"
      >
        {/* BREATH GROUP */}
        <g
          transform={`scale(${breath ? 1.02 : 1})`}
          transformOrigin="150px 250px"
          style={{ transition: "transform 1.2s ease-in-out" }}
        >
          {/* HEAD - anime style messy hair */}
          <circle cx="150" cy="70" r="32" fill="#1a1a1a" stroke="#000" strokeWidth="2" />
          
          {/* Hair spikes */}
          <path
            d="M120 45 Q115 30 120 25 Q125 30 120 45
               M135 40 Q130 20 135 15 Q140 20 135 40
               M150 38 Q145 15 150 10 Q155 15 150 38
               M165 40 Q160 20 165 15 Q170 20 165 40
               M180 45 Q175 30 180 25 Q185 30 180 45"
            fill="#000"
          />

          {/* NECK */}
          <path
            d="M135 100 L135 120 Q135 125 140 125 L160 125 Q165 125 165 120 L165 100"
            fill="#f5d5c8"
            stroke="#000"
            strokeWidth="1.5"
          />

          {/* TRAPEZIUS */}
          <path
            d="M100 130 Q150 115 200 130 L200 160 Q150 145 100 160 Z"
            fill={getColor("shoulder_left")}
            stroke="#000"
            strokeWidth="2"
            opacity="0.9"
          />

          {/* LEFT SHOULDER */}
          <ellipse
            cx="85"
            cy="165"
            rx="28"
            ry="35"
            fill={getColor("shoulder_left")}
            stroke="#000"
            strokeWidth="2"
            transform="rotate(-10 85 165)"
          />

          {/* RIGHT SHOULDER */}
          <ellipse
            cx="215"
            cy="165"
            rx="28"
            ry="35"
            fill={getColor("shoulder_right")}
            stroke="#000"
            strokeWidth="2"
            transform="rotate(10 215 165)"
          />

          {/* CHEST - LEFT PECTORAL */}
          <path
            d="M110 165
               Q95 190 95 220
               Q100 250 130 260
               L150 250
               L150 180
               Q140 165 110 165"
            fill={getColor("chest_left")}
            stroke="#000"
            strokeWidth="2"
          />

          {/* CHEST - RIGHT PECTORAL */}
          <path
            d="M190 165
               Q205 190 205 220
               Q200 250 170 260
               L150 250
               L150 180
               Q160 165 190 165"
            fill={getColor("chest_right")}
            stroke="#000"
            strokeWidth="2"
          />

          {/* CHEST CENTER LINE */}
          <line
            x1="150"
            y1="180"
            x2="150"
            y2="260"
            stroke="#000"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* TORSO SIDES */}
          <path
            d="M95 220 Q85 300 90 380"
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M205 220 Q215 300 210 380"
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />

          {/* ABS - SIX PACK */}
          {/* Top row */}
          <ellipse cx="130" cy="285" rx="18" ry="24" fill={getColor("abs")} stroke="#000" strokeWidth="1.5" />
          <ellipse cx="170" cy="285" rx="18" ry="24" fill={getColor("abs")} stroke="#000" strokeWidth="1.5" />
          
          {/* Middle row */}
          <ellipse cx="130" cy="320" rx="18" ry="24" fill={getColor("abs")} stroke="#000" strokeWidth="1.5" />
          <ellipse cx="170" cy="320" rx="18" ry="24" fill={getColor("abs")} stroke="#000" strokeWidth="1.5" />
          
          {/* Bottom row */}
          <ellipse cx="130" cy="355" rx="17" ry="22" fill={getColor("abs")} stroke="#000" strokeWidth="1.5" />
          <ellipse cx="170" cy="355" rx="17" ry="22" fill={getColor("abs")} stroke="#000" strokeWidth="1.5" />

          {/* ABS CENTER LINE */}
          <line x1="150" y1="265" x2="150" y2="375" stroke="#000" strokeWidth="1.5" opacity="0.4" />

          {/* LEFT BICEP */}
          <ellipse
            cx="70"
            cy="230"
            rx="22"
            ry="40"
            fill={getColor("bicep_left")}
            stroke="#000"
            strokeWidth="2"
            transform="rotate(15 70 230)"
          />

          {/* RIGHT BICEP */}
          <ellipse
            cx="230"
            cy="230"
            rx="22"
            ry="40"
            fill={getColor("bicep_right")}
            stroke="#000"
            strokeWidth="2"
            transform="rotate(-15 230 230)"
          />

          {/* LEFT UPPER ARM */}
          <path
            d="M70 195 Q55 250 60 310"
            stroke={getColor("bicep_left")}
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M70 195 Q55 250 60 310"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* RIGHT UPPER ARM */}
          <path
            d="M230 195 Q245 250 240 310"
            stroke={getColor("bicep_right")}
            strokeWidth="30"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M230 195 Q245 250 240 310"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* LEFT FOREARM */}
          <path
            d="M60 310 Q55 380 65 440"
            stroke={getColor("forearm_left")}
            strokeWidth="24"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M60 310 Q55 380 65 440"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* RIGHT FOREARM */}
          <path
            d="M240 310 Q245 380 235 440"
            stroke={getColor("forearm_right")}
            strokeWidth="24"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M240 310 Q245 380 235 440"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* HANDS */}
          <ellipse cx="65" cy="445" rx="10" ry="12" fill="#f5d5c8" stroke="#000" strokeWidth="1.5" />
          <ellipse cx="235" cy="445" rx="10" ry="12" fill="#f5d5c8" stroke="#000" strokeWidth="1.5" />

          {/* SHORTS */}
          <path
            d="M90 380
               Q90 395 95 395
               L105 505
               L125 505
               L130 395
               L170 395
               L175 505
               L195 505
               L205 395
               Q210 395 210 380
               Q200 375 150 375
               Q100 375 90 380 Z"
            fill="#2a2a2a"
            stroke="#000"
            strokeWidth="2"
          />

          {/* SHORTS WAISTBAND */}
          <rect x="90" y="375" width="120" height="12" rx="2" fill="#1a1a1a" stroke="#000" strokeWidth="1.5" />

          {/* LEFT QUAD */}
          <path
            d="M105 505 Q90 560 95 620"
            stroke={getColor("quad_left")}
            strokeWidth="36"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M105 505 Q90 560 95 620"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* RIGHT QUAD */}
          <path
            d="M195 505 Q210 560 205 620"
            stroke={getColor("quad_right")}
            strokeWidth="36"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M195 505 Q210 560 205 620"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* LEFT CALF */}
          <ellipse
            cx="95"
            cy="645"
            rx="20"
            ry="30"
            fill={getColor("calf_left")}
            stroke="#000"
            strokeWidth="2"
          />

          {/* RIGHT CALF */}
          <ellipse
            cx="205"
            cy="645"
            rx="20"
            ry="30"
            fill={getColor("calf_right")}
            stroke="#000"
            strokeWidth="2"
          />

          {/* LEFT LOWER LEG */}
          <path
            d="M95 620 L95 675"
            stroke={getColor("calf_left")}
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M95 620 L95 675"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* RIGHT LOWER LEG */}
          <path
            d="M205 620 L205 675"
            stroke={getColor("calf_right")}
            strokeWidth="28"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M205 620 L205 675"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />

          {/* FEET */}
          <ellipse cx="95" cy="685" rx="16" ry="10" fill="#f5d5c8" stroke="#000" strokeWidth="1.5" />
          <ellipse cx="205" cy="685" rx="16" ry="10" fill="#f5d5c8" stroke="#000" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  )
}