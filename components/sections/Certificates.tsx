"use client";

import { useEffect, useState } from "react";
import { certificates, type Certificate } from "@/lib/data/certificates";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
          Сертификаты и документация
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-graphite">
          Деятельность ведётся в рамках законодательства РФ: вся продукция имеет необходимую
          разрешительную документацию, а система менеджмента качества сертифицирована по ГОСТ Р
          ИСО 9001-2015 (ISO 9001:2015).
        </p>

        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {certificates.map((cert) => (
            <li key={cert.id}>
              <button
                type="button"
                onClick={() => setActive(cert)}
                className="group flex w-full flex-col overflow-hidden border border-line bg-white text-left transition-all hover:border-rust hover:shadow-lg"
              >
                <div className="relative overflow-hidden border-b border-line bg-section">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.images[0]}
                    alt={cert.title}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  {cert.images.length > 1 && (
                    <span className="absolute right-2 top-2 bg-ink/80 px-2 py-1 font-mono text-[11px] uppercase tracking-widest text-white">
                      {cert.images.length} л.
                    </span>
                  )}
                </div>
                <span className="p-4 font-mono text-xs uppercase leading-snug tracking-wide text-ink">
                  {cert.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 py-2">
              <p className="font-mono text-xs uppercase tracking-widest text-white/90 sm:text-sm">
                {active.title}
              </p>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Закрыть"
                className="shrink-0 rounded-sm bg-white/10 px-3 py-2 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-rust"
              >
                Закрыть ✕
              </button>
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col gap-4 pb-8"
            >
              {active.images.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={
                    active.images.length > 1 ? `${active.title} — лист ${i + 1}` : active.title
                  }
                  className="w-full border border-white/10 bg-white shadow-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
