import { MetadataRoute } from 'next';
import { articlesList } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.valtrixmaterials.com';
  
  const staticRoutes = [
    { route: '', priority: 1.0, changeFreq: 'weekly' as const },
    { route: '/about', priority: 0.9, changeFreq: 'monthly' as const },
    { route: '/solutions', priority: 0.9, changeFreq: 'weekly' as const },
    { route: '/industries', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/contact', priority: 0.8, changeFreq: 'monthly' as const },
    { route: '/privacy-policy', priority: 0.3, changeFreq: 'yearly' as const },
    { route: '/terms-of-use', priority: 0.3, changeFreq: 'yearly' as const },
    { route: '/cookies', priority: 0.3, changeFreq: 'yearly' as const },
    { route: '/compliance', priority: 0.3, changeFreq: 'yearly' as const },
    { route: '/resources', priority: 0.8, changeFreq: 'weekly' as const },
    { route: '/resources/downloads', priority: 0.7, changeFreq: 'weekly' as const },
  ];

  // Industry pages
  const industryRoutes = [
    '/industries/automotive',
    '/industries/metalworking', 
    '/industries/electroplating',
    '/industries/surface-treatment'
  ].map(route => ({
    route,
    priority: 0.7,
    changeFreq: 'monthly' as const
  }));

  // Solutions pages
  const solutionsSubRoutes = [
    '/solutions/metals-alloys',
    '/solutions/polymers-composites',
    '/solutions/coatings-surface-chemicals',
    '/solutions/compliance-certification',
    '/solutions/multi-site-fulfillment',
    '/solutions/inventory-intelligence',
  ].map(route => ({
    route,
    priority: 0.8,
    changeFreq: 'weekly' as const
  }));

  // Product pages (including new high-intent keyword pages)
  const productRoutes = [
    '/products/vamshield-90',
    '/products/metalworking-fluids',
    '/products/electroplating-chemicals',
    '/products/surface-treatments',
    '/products/corrosion-inhibitors',
    '/products/sustainable-polyols'
  ].map(route => ({
    route, 
    priority: 0.8,
    changeFreq: 'monthly' as const
  }));

  // Blog dynamic article pages
  const articleRoutes = articlesList.map(art => ({
    route: `/resources/${art.slug}`,
    priority: 0.6,
    changeFreq: 'monthly' as const
  }));

  const allRoutes = [...staticRoutes, ...industryRoutes, ...solutionsSubRoutes, ...productRoutes, ...articleRoutes];

  return allRoutes.map(({ route, priority, changeFreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority: priority,
  }));
}
