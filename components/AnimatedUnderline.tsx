"use client";

import { motion } from "motion/react";

// Trait orange sous le prix du hero : se « trace » à l'apparition.
export default function AnimatedUnderline({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 10"
      className={className}
      preserveAspectRatio="none"
    >
      <motion.path
        d="M2 7.5C30 3 70 2.5 118 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.45, ease: "easeInOut" }}
      />
    </svg>
  );
}
