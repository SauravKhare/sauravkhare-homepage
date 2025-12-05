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
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subHeadings.length);
    }, 3000);

    return () => clearInterval(interval);
  });


  return (
    <AnimatePresence mode="popLayout">
      <motion.p
        className="font-space-grotesk text-xl text-accent-yellow mb-3"
        key={index}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ ease: "easeIn" }}
      >
        {subHeadings[index]}
      </motion.p>
    </AnimatePresence>
  )
}