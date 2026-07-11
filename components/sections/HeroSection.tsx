"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FactoryIllustration } from "@/components/illustrations";
import { IconArrowRight } from "@/components/icons";

const heroLines = ["РЕЗЕРВУАРЫ.", "ТРУБЫ.", "МЕТАЛЛ."];

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-steel-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:py-24">
        <div>
          <h1 className="font-display text-6xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white sm:text-7xl lg:text-[96px]">
            {heroLines.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-graphite">
            Проектирование, изготовление и монтаж резервуарного оборудования, дымовых труб и
            металлоконструкций под ключ.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="rounded-sm bg-rust px-6 text-base font-medium text-white hover:bg-rust-light"
              render={
                <Link href="/contacts">
                  Получить расчёт
                  <IconArrowRight className="ml-1 h-4 w-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm border-white bg-transparent px-6 text-base font-medium text-white hover:bg-white/10 hover:text-white"
              render={<Link href="/catalog">Каталог</Link>}
            />
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md lg:mx-0 lg:aspect-auto lg:h-full lg:max-w-none">
          <FactoryIllustration className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
