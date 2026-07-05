"use client";

import { motion } from "motion/react";
import { useCurrency } from "@/lib/currency-context";
import { formatPrice } from "@/lib/currency";

// Affiche « 99 € / $ / £ » selon la devise, avec un léger « pop »
// à chaque changement de devise (la clé change → remontage animé).
export default function Price({ className }: { className?: string }) {
  const { currency } = useCurrency();
  return (
    <motion.span
      key={currency}
      className={className}
      style={{ display: "inline-block" }}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
    >
      {formatPrice(currency)}
    </motion.span>
  );
}
