import { MetadataRoute } from 'next';
import { getAllComparisonSlugs } from './vs/_data/comparisons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://counselstack.io';
  const now = new Date();
  
  // Core pages (only include pages that exist)
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
  ];

  // Comparison pages (/vs/)
  const comparisonPages: MetadataRoute.Sitemap = getAllComparisonSlugs().map((slug) => ({
    url: `${baseUrl}/vs/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...corePages, ...comparisonPages];
}
