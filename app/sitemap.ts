import { MetadataRoute } from 'next';
import { getAllComparisonSlugs } from './vs/_data/comparisons';
import { getAllAudienceSlugs } from './for/_data/audiences';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://counselstack.io';
  const now = new Date();

  // Core pages
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

  // Audience pages (/for/)
  const audiencePages: MetadataRoute.Sitemap = getAllAudienceSlugs().map((slug) => ({
    url: `${baseUrl}/for/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...corePages, ...comparisonPages, ...audiencePages];
}
