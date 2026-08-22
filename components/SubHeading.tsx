"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface SubHeadingType {
  data?: {
    text: string;
    id?: string | null;
  }[] | null;
}

export default function SubHeading({ data }: SubHeadingType) {
  const [index, setIndex] = useState(0);
  const subHeadings = data?.map(subheading => subheading.text) ?? [];

  useEffect(() => {
    if (subHeadings.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subHeadings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [subHeadings.length]);


  return (
    <div className="relative overflow-hidden h-14 md:h-32 flex items-center">
      <AnimatePresence mode="sync" initial={false}>
        <motion.p
          key={index}
          className="absolute inset-0 flex items-center font-fraunces italic text-4xl md:text-8xl text-teal-primary font-variation-settings-['opsz'_96]"
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{
            duration: 0.45,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          {subHeadings[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}