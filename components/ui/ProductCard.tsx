import Link from "next/link";
import { ProductIllustration } from "@/components/illustrations";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/icons";
import { getAssetUrl } from "@/lib/images";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const href = `/catalog/${product.category}/${product.id}`;
  const volumeLabel =
    product.volumes.length > 1
      ? `${product.volumeRange[0]}–${product.volumeRange[1]} м³`
      : product.volumes[0];

  return (
    <div className="group flex flex-col overflow-hidden border border-line border-t-[3px] border-t-transparent bg-white transition-all hover:border-t-rust hover:shadow-lg">
      <Link href={href} className="block">
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getAssetUrl(product.image)}
            alt={product.name}
            loading="lazy"
            className="aspect-[4/3] w-full border-b border-line object-cover"
          />
        ) : (
          <ProductIllustration
            icon={product.icon}
            className="aspect-[4/3] w-full border-b border-line"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-rust">
            {product.shortName}
          </p>
          <h3 className="mt-1 font-display text-xl font-bold uppercase leading-tight text-ink">
            <Link href={href}>{product.name}</Link>
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-graphite">{product.shortDesc}</p>
        <dl className="mt-auto grid grid-cols-2 gap-3 border-t border-line pt-3 font-mono text-xs text-graphite">
          <div>
            <dt className="uppercase tracking-wide text-graphite/70">Объём</dt>
            <dd className="mt-1 text-ink">{volumeLabel}</dd>
          </div>
          <div>
            <dt className="uppercase tracking-wide text-graphite/70">Материал</dt>
            <dd className="mt-1 truncate text-ink" title={product.material}>
              {product.material}
            </dd>
          </div>
        </dl>
        <div className="mt-2 flex gap-2">
          <Button
            variant="outline"
            className="flex-1 rounded-sm border-line text-ink hover:border-rust hover:bg-transparent hover:text-rust"
            render={
              <Link href={href}>
                Подробнее
                <IconArrowRight className="ml-1 h-4 w-4" />
              </Link>
            }
          />
          <Button
            className="flex-1 rounded-sm bg-rust text-white hover:bg-rust-light"
            render={<Link href="/contacts">Запросить цену</Link>}
          />
        </div>
      </div>
    </div>
  );
}
