"use client";

import Image from "next/image";

export default function ResumeButton() {
  return (
    <a href="https://0ave63j0lg.ufs.sh/f/j0oNiZlcJDrCoGern95Pz8evH41ZBQUacqbTl5f37noxYLRF"
      className="font-body text-base text-ink flex hover:gap-2 items-center"
      target="_blank"
      rel="noopener noreferrer">
      View full Résumé.
      <Image src="./arrow.svg" className="fill-ink" alt="arrow" width={20} height={20} />
    </a>
  );
}