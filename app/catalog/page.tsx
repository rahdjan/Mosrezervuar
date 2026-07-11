import type { Metadata } from "next";
import { CatalogView } from "@/components/sections/CatalogView";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata: Metadata = {
  title: "Каталог продукции",
  description:
    "Резервуары, дымовые трубы, силосы, резервуарное оборудование и металлоконструкции. Подбор по типу, объёму и материалу.",
};

export default function CatalogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Каталог"
        title="Каталог продукции"
        description="Резервуары, дымовые трубы, силосы, резервуарное оборудование и металлоконструкции. Используйте фильтры слева, чтобы быстро найти нужное решение."
      />
      <CatalogView />
    </>
  );
}
