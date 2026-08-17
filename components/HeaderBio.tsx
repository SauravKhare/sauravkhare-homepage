import { calculateExperience, replaceExperienceInRichText } from "@/lib/utils";
import { RichText } from "@/components/RichText/RichText";
import { PayloadRichText } from "@/lib/types";

interface HeaderBioProps {
  bio: PayloadRichText;
  className?: string;
}

export default async function HeaderBio({ bio, className }: HeaderBioProps) {
  if (!bio) {
    return null;
  }

  const startDate = new Date("2021-01-15");
  const { years, months } = calculateExperience(startDate);
  const decimalYears = (years + months / 12).toFixed(1);
  const experienceText = `${decimalYears} years`;

  const updatedBio = replaceExperienceInRichText(bio, experienceText);

  return (
    <RichText data={updatedBio} className={`prose text-lg leading-relaxed font-body text-ink ${className ?? ""}`} />
  )
}
