import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/sections/CatalogView";
import { PageHeader } from "@/components/sections/PageHeader";
import { categories, getCategory } from "@/lib/data/categories";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};

  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <PageHeader eyebrow="Каталог" title={category.title} description={category.description} />
      <CatalogView category={category.id} />
    </>
  );
}
