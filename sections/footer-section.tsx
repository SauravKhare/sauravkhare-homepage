import { connection } from "next/server";
import { getFooter } from "@/fetchers/globals";
import { Footer } from "@/components/Footer";

export async function FooterSection() {
  await connection();
  const data = await getFooter();
  return <Footer data={data} />;
}
