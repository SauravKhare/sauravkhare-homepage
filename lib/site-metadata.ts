import { Metadata } from "next";
import { Site } from "@/payload-types";

export function siteToMetadata(site: Site | null): Metadata {
  const seo = site?.seo;
  const brandName = site?.brandName || "Saurav Khare";
  const title = seo?.title || brandName;
  const description = seo?.description || "Frontend Engineer";
  const ogTitle = seo?.ogTitle || title;
  const ogDescription = seo?.ogDescription || description;
  const ogImage =
    seo?.ogImage && typeof seo.ogImage === "object"
      ? seo.ogImage.url
      : null;

  return {
    title,
    description,
    keywords: seo?.keywords?.split(",")?.map((k) => k.trim()),

    openGraph: {
      type: "website",
      locale: "en_US",
      url: seo?.canonicalUrl || "https://sauravkhare.com",
      siteName: title || brandName,
      title: ogTitle,
      description: ogDescription,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: ogTitle,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      site: title || brandName,
      creator: seo?.twitterHandle || "",
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : [],
    },

    robots: {
      index: !seo?.noIndex,
      follow: !seo?.noFollow,
      googleBot: {
        index: !seo?.noIndex,
        follow: !seo?.noFollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: seo?.canonicalUrl || "https://sauravkhare.com",
    },

    authors: [{ name: brandName }],
    creator: brandName,
  };
}
