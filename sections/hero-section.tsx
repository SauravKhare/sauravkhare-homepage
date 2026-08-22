import { getHero } from "@/fetchers/globals";
import { Hero } from "@/components/Hero";

export async function HeroSection() {
  const data = await getHero();
  return <Hero data={data} />;
}
