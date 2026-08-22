import { getNow } from "@/fetchers/globals";
import { Now } from "@/components/Now";

export async function NowSection() {
  const data = await getNow();
  return <Now data={data} />;
}
