// Резолвер URL изображений. Сейчас ключ указывает на файл в public/ (база пустая),
// в будущем для переезда на S3/CDN достаточно задать NEXT_PUBLIC_ASSETS_BASE_URL
// и залить те же ключи в бакет — код и данные менять не нужно.
const base = process.env.NEXT_PUBLIC_ASSETS_BASE_URL ?? "";

/**
 * Резолвит ключ изображения в полный URL.
 * @param key путь-ключ, например "/catalog/rvs_rezervuar.jpg" или "/portfolio/gal-80.jpg"
 */
export function getAssetUrl(key: string): string {
  return `${base}${key}`;
}

/** Алиас для изображений портфолио. */
export const getProjectImageUrl = getAssetUrl;
