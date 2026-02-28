import { calculateExperience, replaceExperienceInRichText } from "@/lib/utils";
import { RichText } from "./RichText/RichText";
import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";


interface HeaderBioProps {
  bio: SerializedEditorState;
  className?: string,
}

export default async function HeaderBio({ bio, className }: HeaderBioProps) {
  if (!bio) {
    return null;
  }

  const startDate = new Date("2021-01-15");
  const { years, months } = calculateExperience(startDate);
  // Convert to decimal years
  const decimalYears = (years + months / 12).toFixed(1); // "4.9"
  const experienceText = `${decimalYears} years`;

  const updatedBio = replaceExperienceInRichText(bio, experienceText);

  return (
    <RichText data={updatedBio as SerializedEditorState} className={`prose text-lg leading-relaxed font-body text-ink ${className}`} />
  )
}