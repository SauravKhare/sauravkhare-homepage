import { getResumeLink } from "@/fetchers/globals";

export default async function ResumeButton() {
  const resumeUrl = await getResumeLink();
  if (!resumeUrl) return null;

  return (
    <a
      href={resumeUrl}
      className="inline-block bg-teal-primary font-jakarta text-sm text-dark-primary px-6 py-3 md:px-8 md:py-4 rounded-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      View full Résumé.
    </a>
  );
}