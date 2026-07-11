import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ProductIllustration } from "@/components/illustrations";
import { IconArrowRight } from "@/components/icons";
import { categories, getCategory } from "@/lib/data/categories";
import { getProduct, getProductsByCategory } from "@/lib/data/products";
import { getAssetUrl } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

interface ProductPageProps {
  params: Promise<{ category: string; product: string }>;
}

export function generateStaticParams() {
  return categories.flatMap((category) =>
    getProductsByCategory(category.id).map((product) => ({
      category: category.slug,
      product: product.id,
    })),
  );
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { category: categorySlug, product: productId } = await params;
  const product = getProduct(categorySlug, productId);
  if (!product) return {};

  return {
    title: product.name,
    description: product.shortDesc,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { category: categorySlug, product: productId } = await params;
  const category = getCategory(categorySlug);
  const product = category ? getProduct(category.id, productId) : undefined;

  if (!category || !product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDesc,
    category: category.name,
    brand: { "@type": "Brand", name: siteConfig.name },
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <section className="border-b border-line bg-steel-dark">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <Link
            href={`/catalog/${category.slug}`}
            className="font-mono text-xs uppercase tracking-widest text-graphite transition-colors hover:text-rust-light"
          >
            ← {category.name}
          </Link>
          <p className="mt-4 font-mono text-xs uppercase tracking-widest text-rust">
            {[product.shortName, product.standard].filter(Boolean).join(" · ")}
          </p>
          <h1 className="mt-2 font-display text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            {product.name}
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-12 md:px-8 lg:grid-cols-2 lg:py-16">
          {product.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getAssetUrl(product.image)}
              alt={product.name}
              className="aspect-[4/3] w-full border border-line object-cover"
            />
          ) : (
            <ProductIllustration
              icon={product.icon}
              label={product.shortName}
              className="aspect-[4/3] w-full border border-line"
            />
          )}

          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-graphite">{product.description}</p>

            <dl className="divide-y divide-line border border-line">
              {product.specs.map((spec) => (
                <div key={spec.label} className="grid grid-cols-2 gap-4 px-4 py-3">
                  <dt className="font-mono text-xs uppercase tracking-widest text-graphite">
                    {spec.label}
                  </dt>
                  <dd className="font-mono text-sm text-ink">{spec.value}</dd>
                </div>
              ))}
            </dl>

            {product.variants && product.variants.length > 0 && (
              <div className="border border-line">
                <p className="border-b border-line px-4 py-3 font-mono text-xs uppercase tracking-widest text-graphite">
                  Исполнения
                </p>
                <ul className="flex flex-col gap-2 px-4 py-3 text-sm text-ink">
                  {product.variants.map((variant) => (
                    <li key={variant} className="flex gap-2">
                      <span className="text-rust">—</span>
                      <span>{variant}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap items-start gap-3">
              <Button
                size="lg"
                className="rounded-sm bg-rust text-base font-medium text-white hover:bg-rust-light"
                render={
                  <Link href="/contacts">
                    Запросить цену
                    <IconArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                }
              />
              <div className="flex flex-col gap-1">
                <Button
                  size="lg"
                  variant="outline"
                  disabled
                  className="rounded-sm border-line text-graphite"
                >
                  Спецификация (PDF)
                </Button>
                <p className="font-mono text-xs text-graphite/70">Файл в разработке</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
