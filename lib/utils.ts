import { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Media } from "@/payload-types";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function getMediaUrl(media?: number | Media | null): string | null {
  if (media && typeof media === "object" && "url" in media) {
    return media.url ?? null;
  }
  return null;
}

export function getMediaAlt(media?: number | Media | null): string | null {
  if (media && typeof media === "object" && "alt" in media) {
    return media.alt ?? null;
  }
  return null;
}

export function formatNoteDate(dateString?: string | null): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return "";
  const pad = (value: number) => value.toString().padStart(2, "0");
  return `${pad(date.getMonth() + 1)}.${pad(date.getDate())}.${date.getFullYear()}`;
}

export function calculateExperience(startDate: Date): {
  years: number;
  months: number;
} {
  const currentDate = new Date();
  const diffInMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  return { years, months };
}

export function formatDate(dateString: string, locale: string = "en-US"): string {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(date);
}

export function replaceExperienceInRichText(
  data: SerializedEditorState,
  experienceText: string,
): SerializedEditorState {
  if (!data || !data.root) {
    return data;
  }

  if (!data.root?.children) {
    return data;
  }

  const updatedData = { ...data };
  updatedData.root.children = data.root.children.map((paragraph) => {
    const newParagraph = { ...paragraph };
    if ("children" in newParagraph && Array.isArray(newParagraph.children)) {
      newParagraph.children = newParagraph.children.map((child) => {
        const newChild = { ...child };
        if ("text" in newChild && typeof newChild.text === "string") {
          newChild.text = newChild.text.replace("{{experience}}", experienceText);
        }
        return newChild;
      });
    }
    return newParagraph;
  });

  return updatedData;
}
