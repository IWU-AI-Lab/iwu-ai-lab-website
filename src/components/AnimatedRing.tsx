// components/AnimatedRing.tsx
"use client";

import { motion } from "framer-motion";

// Exported so HeroSection can compute exact icon delays without guessing.
// Phase 1: ring fades in (opacity 0 → 1).
// Phase 2: stroke draws linearly from 0 → full circumference.
// Icon at angular fraction f should appear at:
//   ringDelay + RING_FADE_DURATION + f * RING_DRAW_DURATION
export const RING_FADE_DURATION = 0.25;
export const RING_DRAW_DURATION = 1.75;

export default function AnimatedRing({
    color,
    delay = 0,
    fadeDuration = RING_FADE_DURATION,
    drawDuration = RING_DRAW_DURATION,
}: {
    color: string;
    delay?: number;
    fadeDuration?: number;
    drawDuration?: number;
}) {
    // viewBox-relative units — always fills whatever container it's placed in.
    const vbSize = 100;
    const strokeWidth = 1.0;
    const r = vbSize / 2;
    const circumference = 2 * Math.PI * r;

    const totalDuration = fadeDuration + drawDuration;
    // Normalized time at which the stroke starts drawing (after the fade).
    const drawStartT = fadeDuration / totalDuration;

    return (
        // Fill the ring container div completely — no fixed pixel size.
        <div className="absolute inset-0">
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${vbSize} ${vbSize}`}
                style={{ overflow: "visible" }}
            >
                <motion.circle
                    cx={vbSize / 2}
                    cy={vbSize / 2}
                    r={r}
                    fill="none"
                    stroke={color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    // Two-phase keyframe animation:
                    // [0]  t=0             → opacity:0, dashoffset=full (invisible, undrawing)
                    // [1]  t=drawStartT   → opacity:1, dashoffset=full (ring visible, nothing drawn yet)
                    // [2]  t=1            → opacity:1, dashoffset=0    (ring visible, fully drawn)
                    initial={{
                        strokeDasharray: circumference,
                        strokeDashoffset: circumference,
                        opacity: 0,
                    }}
                    animate={{
                        opacity: [0, 1, 1],
                        strokeDashoffset: [circumference, circumference, 0],
                    }}
                    transition={{
                        duration: totalDuration,
                        delay,
                        times: [0, drawStartT, 1],
                        // easeOut for the fade phase, linear for the draw phase.
                        // Linear is critical: it makes stroke position = f × drawDuration,
                        // letting HeroSection sync icons mechanically.
                        ease: ["easeOut", "linear"],
                    }}
                />
            </svg>
        </div>
    );
}