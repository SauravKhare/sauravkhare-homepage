import { getResumeLink } from "@/fetchers/globals";

export default async function ResumeButton() {
  const resumeUrl = await getResumeLink();
  if (!resumeUrl) return null;

  return (
    <a
      href={resumeUrl}
      className="group inline-flex w-fit items-center gap-1.5 text-base link-wet-ink pr-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      View full Résumé.

      <span
        className="w-5 h-5 bg-ink transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:bg-canvas"
        style={{
          WebkitMaskImage: `url(./arrow.svg)`,
          maskImage: `url(./arrow.svg)`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </a>
  );
}