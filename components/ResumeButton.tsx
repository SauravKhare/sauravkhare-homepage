import { getResumeLink } from "@/fetchers/globals";

export default async function ResumeButton() {
  const resumeUrl = await getResumeLink();
  if (!resumeUrl) return null;

  return (
    <a
      href={resumeUrl}
      className="inline-block bg-teal-primary font-jakarta text-sm text-dark-primary px-8 py-4 rounded-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      View full Résumé.
    </a>
  );
}