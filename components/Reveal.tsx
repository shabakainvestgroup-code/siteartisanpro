"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

// Apparition au scroll via Framer Motion.
// API inchangée (children, delay en ms, className) — toutes les sections
// existantes en bénéficient automatiquement.
// Le respect de prefers-reduced-motion est géré globalement par
// <MotionConfig reducedMotion="user"> dans le layout.

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.6,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
