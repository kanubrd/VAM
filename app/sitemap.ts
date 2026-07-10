import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vamvaltrix.com';
  
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

  // Product pages
  const productRoutes = [
    '/products/vamshield-90'
  ].map(route => ({
    route, 
    priority: 0.6,
    changeFreq: 'monthly' as const
  }));

  const allRoutes = [...staticRoutes, ...industryRoutes, ...productRoutes];

  return allRoutes.map(({ route, priority, changeFreq }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority: priority,
  }));
}
