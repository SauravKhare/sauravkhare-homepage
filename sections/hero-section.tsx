import { getHeader } from "@/fetchers/globals";
import { Hero } from "@/components/Hero";

export async function HeroSection() {
  const data = await getHeader();
  return <Hero data={data} />;
}
