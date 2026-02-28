"use client";

import { motion } from "motion/react";
// 1. Import the Variants type
import type { Variants } from "motion/react";
import { ReactNode } from "react";

// 2. Explicitly type the container
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// 3. Explicitly type the items (This fixes the error!)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98], // TS now knows this is a valid 4-point tuple
    },
  },
};

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div variants={itemVariants} className={`will-change-transform will-change-opacity ${className}`}>
      {children}
    </motion.div>
  );
}