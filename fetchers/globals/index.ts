import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getNow() {
  const payload = await getPayload({ config: configPromise });
  const nowData = (await payload.findGlobal({ slug: "siteglobal" })).now;
  return nowData;
}

export async function getHeader() {
  const payload = await getPayload({ config: configPromise });
  const headerData = (await payload.findGlobal({ slug: "siteglobal" })).header;
  return headerData;
}