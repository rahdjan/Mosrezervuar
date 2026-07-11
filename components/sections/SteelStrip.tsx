import { siteConfig } from "@/lib/site-config";
import { StatCounter } from "./StatCounter";

/**
 * Signature "Сечение металла" element: a steel-textured strip between the
 * hero and the first content block, carrying the three key trust numbers.
 */
export function SteelStrip() {
  return (
    <section className="steel-texture">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 sm:h-[140px] sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        <div className="flex items-center justify-center py-8 sm:py-0">
          <StatCounter value={siteConfig.stats.yearsOnMarket} label="лет на рынке" />
        </div>
        <div className="flex items-center justify-center py-8 sm:py-0">
          <StatCounter value={siteConfig.stats.projectsDone} label="реализованных проектов" />
        </div>
        <div className="flex items-center justify-center py-8 sm:py-0">
          <StatCounter value={siteConfig.stats.maxVolume} label="максимальный объём резервуара" />
        </div>
      </div>
    </section>
  );
}
