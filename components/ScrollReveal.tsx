"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      // 1. Start completely invisible and pushed down slightly (15px)
      initial={{ opacity: 0, y: 15 }}

      // 2. Animate to full opacity and its natural position
      whileInView={{ opacity: 1, y: 0 }}

      // 3. Configure the trigger:
      // 'once: true' ensures it stays visible if they scroll back up (crucial for reading)
      // 'margin: "-100px"' makes it wait until it's slightly inside the viewport to trigger
      viewport={{ once: true, margin: "-100px" }}

      // 4. The "Developing Ink" timing
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // A very elegant, custom ease-out curve
      }}
      className="will-change-transform will-change-opacity"
    >
      {children}
    </motion.div>
  );
}