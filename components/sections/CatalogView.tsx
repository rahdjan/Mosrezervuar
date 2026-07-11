"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { categories, type CategoryId } from "@/lib/data/categories";
import { products as allProducts } from "@/lib/data/products";

const MAX_VOLUME = 20000;

const materialFilters = [
  { id: "carbon", label: "Углеродистая сталь", test: /углеродист|ст3|09г2с/i },
  { id: "stainless", label: "Нержавеющая сталь", test: /нержав/i },
] as const;

interface CatalogViewProps {
  /** When set, restricts the catalog to a single category and hides the type filter. */
  category?: CategoryId;
}

export function CatalogView({ category }: CatalogViewProps) {
  const [categoryFilter, setCategoryFilter] = useState<string>(category ?? "all");
  const [volumeRange, setVolumeRange] = useState<[number, number]>([0, MAX_VOLUME]);
  const [materials, setMaterials] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return allProducts.filter((product) => {
      if (categoryFilter !== "all" && product.category !== categoryFilter) return false;

      if (product.volumeRange[1] > 0) {
        const [min, max] = volumeRange;
        if (product.volumeRange[1] < min || product.volumeRange[0] > max) return false;
      }

      if (materials.length > 0) {
        const matchesMaterial = materialFilters
          .filter((f) => materials.includes(f.id))
          .some((f) => f.test.test(product.material));
        if (!matchesMaterial) return false;
      }

      return true;
    });
  }, [categoryFilter, volumeRange, materials]);

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 md:px-8 lg:grid-cols-[260px_1fr] lg:gap-10 lg:py-16">
      <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:h-fit lg:border-r lg:border-line lg:pr-8">
        {!category && (
          <div className="flex flex-col gap-2">
            <Label className="font-mono text-xs uppercase tracking-widest text-graphite">
              Тип резервуара
            </Label>
            <Select value={categoryFilter} onValueChange={(value) => setCategoryFilter(value ?? "all")}>
              <SelectTrigger className="w-full rounded-sm border-line">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                {categories.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <Label className="font-mono text-xs uppercase tracking-widest text-graphite">
            Объём, м³
          </Label>
          <Slider
            min={0}
            max={MAX_VOLUME}
            step={100}
            value={volumeRange}
            onValueChange={(value) => setVolumeRange(value as [number, number])}
          />
          <p className="font-mono text-xs text-ink">
            {volumeRange[0]} – {volumeRange[1]} м³
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Label className="font-mono text-xs uppercase tracking-widest text-graphite">
            Материал
          </Label>
          {materialFilters.map((f) => (
            <label key={f.id} className="flex items-center gap-2 text-sm text-ink">
              <input
                type="checkbox"
                checked={materials.includes(f.id)}
                onChange={(e) => {
                  setMaterials((prev) =>
                    e.target.checked ? [...prev, f.id] : prev.filter((m) => m !== f.id),
                  );
                }}
                className="h-4 w-4 rounded-sm border border-line accent-rust"
              />
              {f.label}
            </label>
          ))}
        </div>
      </aside>

      <div>
        {filtered.length === 0 ? (
          <p className="text-sm text-graphite">По заданным фильтрам ничего не найдено.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={`${product.category}-${product.id}`} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
