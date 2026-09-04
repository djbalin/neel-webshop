import PreviewSelector from "../../preview/PreviewSelector";
import type { ProductKey } from "@/contexts/CartContext";

export default async function PreviewPage({
  searchParams,
}: {
  searchParams: Promise<{ bog?: string }>;
}) {
  const { bog } = await searchParams;
  const initial: ProductKey = bog === "komplet" ? "komplet" : "facet";

  return <PreviewSelector initial={initial} isEn />;
}
