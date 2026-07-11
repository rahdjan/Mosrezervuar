import Link from "next/link";
import { CategoryIcon, IconArrowRight } from "@/components/icons";
import { catalogHighlights } from "@/lib/data/categories";

export function CatalogPreview() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Каталог продукции
          </h2>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-rust transition-colors hover:text-rust-light"
          >
            Весь каталог
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalogHighlights.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col gap-4 border border-line border-t-[3px] border-t-transparent bg-white p-6 transition-all hover:border-t-rust hover:shadow-lg"
            >
              <CategoryIcon icon={item.icon} className="h-10 w-10 text-steel-dark" strokeWidth={1.5} />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-rust">
                  {item.shortName}
                </p>
                <h3 className="mt-1 font-display text-xl font-bold uppercase leading-tight text-ink">
                  {item.name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-graphite">{item.description}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-graphite">
                {item.range}
              </p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors group-hover:text-rust">
                Подробнее
                <IconArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
