import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Пинуем корень проекта: в $HOME есть лишний package-lock.json, из-за которого
  // Turbopack выбирал неверный workspace root (см. предупреждение при dev).
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
