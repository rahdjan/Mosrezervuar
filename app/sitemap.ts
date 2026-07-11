import type { MetadataRoute } from "next";
import { categories } from "@/lib/data/categories";
import { getProductsByCategory } from "@/lib/data/products";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = ["", "/catalog", "/services", "/portfolio", "/about", "/contacts", "/privacy"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified,
    }),
  );

  const categoryRoutes = categories.map((category) => ({
    url: `${siteConfig.url}/catalog/${category.slug}`,
    lastModified,
  }));

  const productRoutes = categories.flatMap((category) =>
    getProductsByCategory(category.id).map((product) => ({
      url: `${siteConfig.url}/catalog/${category.slug}/${product.id}`,
      lastModified,
    })),
  );

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
