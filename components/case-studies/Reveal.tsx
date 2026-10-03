"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Scroll reveal sutil; con reduced-motion muestra el contenido sin animar.
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
