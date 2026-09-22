import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/manifest.json'],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
        ],
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
