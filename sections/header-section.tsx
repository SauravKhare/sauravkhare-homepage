import { getArchives } from "@/fetchers/globals";
import HeaderTopNavigation from "@/components/HeaderTopNavigation";

export async function HeaderSection() {
  const records = await getArchives();
  return <HeaderTopNavigation records={records} />;
}
