"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/icons";

const heroLines = ["РЕЗЕРВУАРЫ", "ДЫМОВЫЕ ТРУБЫ", "МЕТАЛЛО-", "КОНСТРУКЦИИ"];

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-steel-dark hero-grid lg:min-h-[640px]">
      {/* Chimney photo (full-bleed right). Black background is dropped via screen blend. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[72%] lg:w-[54%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-chimney.jpg"
          alt="Промышленная дымовая труба с дымовым шлейфом"
          className="hero-chimney-blend h-full w-full object-cover object-top"
        />
        {/* Animated steam rising from the chimney mouth */}
        <div className="absolute left-[36%] top-[13%] h-40 w-40">
          <span className="hero-smoke__puff" />
          <span className="hero-smoke__puff" />
          <span className="hero-smoke__puff" />
          <span className="hero-smoke__puff" />
          <span className="hero-smoke__puff" />
        </div>
      </div>

      {/* Left gradient for text legibility + bottom fade into the page */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-steel-dark from-25% via-steel-dark/85 to-transparent lg:via-steel-dark/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-steel-dark to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[560px] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-20 md:px-8 lg:min-h-[640px] lg:grid-cols-[1.1fr_1fr] lg:py-28">
        <div>
          <h1 className="font-display text-6xl font-black uppercase leading-[0.95] tracking-[-0.02em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.4)] sm:text-7xl lg:text-[96px]">
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
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
