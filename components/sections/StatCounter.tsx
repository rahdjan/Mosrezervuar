"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
}

export function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  // Число может содержать пробелы-разделители тысяч ("20 000 м³"); суффикс
  // сохраняем как есть, чтобы "70+" шло без пробела, а "20 000 м³" — с пробелом.
  const match = value.match(/^(\d+(?:[\s ]\d{3})*(?:[.,]\d+)?)(.*)$/);
  const target = match ? Number(match[1].replace(/[\s ]/g, "").replace(",", ".")) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest).toLocaleString("ru-RU")),
    });
    return () => controls.stop();
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span className="font-display text-4xl font-black leading-none text-white sm:text-5xl">
        {display}
        {suffix}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-white/50">{label}</span>
    </div>
  );
}
