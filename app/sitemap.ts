import { MetadataRoute } from 'next';
import { getAllComparisonSlugs } from './vs/_data/comparisons';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://counselstack.com';
  const now = new Date();
  
  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/features`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/how-to-choose`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.6 },
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
