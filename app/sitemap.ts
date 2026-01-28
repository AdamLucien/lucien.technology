import type { MetadataRoute } from "next";
import { brand } from "@/lib/brand";
import { services } from "@/content/services";
import { insights } from "@/content/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${brand.domain}`;
  const now = new Date();

  const staticRoutes = [
    "",
    "/capabilities",
    "/marketplace",
    "/how-we-work",
    "/security",
    "/about",
    "/contact",
    "/request-scope",
    "/insights",
    "/procurement",
    "/legal",
    "/legal/terms",
    "/legal/privacy",
    "/legal/cookies",
    "/legal/responsible-use",
    "/legal/security-disclosure",
    "/legal/export-controls",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${base}/marketplace/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insights.map((item) => ({
      url: `${base}/insights/${item.slug}`,
      lastModified: item.date,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}
