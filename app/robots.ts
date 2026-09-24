import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/manifest.json', '/favicon.ico', '/icon-*.png', '/icon.png'],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
        ],
      },
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Googlebot-Favicon'],
        allow: ['/', '/manifest.json', '/favicon.ico', '/icon-*.png', '/icon.png'],
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'GoogleOther',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'CCBot',
          'cohere-ai',
        ],
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://www.valtrixmaterials.com/sitemap.xml',
  };
}
