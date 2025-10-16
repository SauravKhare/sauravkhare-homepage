"use client";

import Image from "next/image";

import posthog from 'posthog-js';

export default function ResumeButton() {

  return (
    <a href="https://0ave63j0lg.ufs.sh/f/j0oNiZlcJDrCoGern95Pz8evH41ZBQUacqbTl5f37noxYLRF"
      className="text-base text-white/80 duration-500 hover:underline hover:text-yellow-400 flex hover:gap-2 items-center font-inter"
      onClick={() => {
        if (posthog) {
          posthog.capture("resume_link_clicked");
        }
      }}
      target="_blank"
      rel="noopener noreferrer">
      View full Résumé.
      <Image src="./arrow.svg" alt="arrow" width={20} height={20} />
    </a>
  );
}