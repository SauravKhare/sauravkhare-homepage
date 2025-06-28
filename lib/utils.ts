import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility function to calculate experience
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

export function formatDate(dateString: string, locale: string = "en-US") {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string ${dateString}`);
  }
  return new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" }).format(date);
}
