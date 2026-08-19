import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
import { products } from '@/data/products'
import { blogs } from '@/data/blogs'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mgacharger.com'

  const staticRoutes = [
    '',
    '/about-us',
    '/products',
    '/blogs',
    '/gallery',
    '/brochure',
    '/contact-us',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...blogRoutes]
}
