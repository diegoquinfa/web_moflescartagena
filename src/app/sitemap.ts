import type { MetadataRoute } from 'next'

const SITE_URL = 'https://moflescartagena.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const lastModified = now.toISOString()

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          'es-CO': `${SITE_URL}/`,
        },
      },
    },
  ]
}
