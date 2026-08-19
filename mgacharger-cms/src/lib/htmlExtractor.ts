import * as cheerio from 'cheerio'
import { sanitizeBlogHtml } from './sanitizer'
import { getImageUrl } from './getImageUrl'

export interface ExtractedBlogData {
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  imagePath: string
  status: 'draft' | 'published'
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function extractBlogFromHtml(rawHtml: string): ExtractedBlogData {
  if (!rawHtml || !rawHtml.trim()) {
    throw new Error('HTML content is empty. Please provide valid HTML file or text.')
  }

  const $ = cheerio.load(rawHtml)

  // Remove non-article element noise
  $('script, style, iframe, noscript, nav, header, footer, aside, form, svg, button, .comments, .sidebar, .advertisement, .social-share, .cookie-banner').remove()

  // 1. TITLE EXTRACTION
  let title = $('h1').first().text().trim()
  if (!title) {
    title = $('meta[property="og:title"]').attr('content') || $('meta[name="twitter:title"]').attr('content') || $('title').text().trim() || ''
  }
  // Clean up title (remove site suffix like " | MGA Charger")
  title = title.split('|')[0].split('- MGA')[0].trim()

  // 2. SLUG EXTRACTION
  let slug = ''
  const canonicalUrl = $('link[rel="canonical"]').attr('href') || $('meta[property="og:url"]').attr('content')
  if (canonicalUrl) {
    try {
      const parts = canonicalUrl.split('/')
      slug = parts[parts.length - 1] || parts[parts.length - 2] || ''
    } catch {
      slug = ''
    }
  }
  if (!slug && title) {
    slug = slugify(title)
  }
  if (!slug) {
    slug = `blog-${Date.now()}`
  }

  // 3. EXCERPT EXTRACTION
  let excerpt = $('meta[name="description"]').attr('content') || $('meta[property="og:description"]').attr('content') || ''
  if (!excerpt) {
    const firstP = $('p').first().text().trim()
    if (firstP && firstP.length > 20) {
      excerpt = firstP.length > 200 ? `${firstP.slice(0, 197)}...` : firstP
    }
  }

  // 4. AUTHOR EXTRACTION
  let author = $('meta[name="author"]').attr('content') || $('meta[property="article:author"]').attr('content') || ''
  if (!author) {
    author = $('.author, .byline, [rel="author"]').first().text().trim()
  }
  if (!author) {
    author = 'Technical Support'
  }

  // 5. PUBLISHED DATE EXTRACTION
  let publishedAt = $('meta[property="article:published_time"]').attr('content') || $('meta[name="pubdate"]').attr('content') || ''
  if (!publishedAt) {
    publishedAt = $('time').attr('datetime') || $('time').text().trim() || ''
  }
  if (!publishedAt || isNaN(Date.parse(publishedAt))) {
    publishedAt = new Date().toISOString()
  } else {
    publishedAt = new Date(publishedAt).toISOString()
  }

  // 6. FEATURED IMAGE EXTRACTION & DOMAIN RESOLUTION
  let rawImagePath = $('meta[property="og:image"]').attr('content') || $('meta[name="twitter:image"]').attr('content') || ''
  if (!rawImagePath) {
    rawImagePath = $('img').first().attr('src') || ''
  }
  const imagePath = getImageUrl(rawImagePath)

  // 7. BODY CONTENT EXTRACTION
  let $contentContainer = $('article, main, [role="main"], .post-content, .blog-content, .entry-content').first()
  if (!$contentContainer.length) {
    $contentContainer = $('body').first()
  }
  if (!$contentContainer.length) {
    $contentContainer = $('html').first()
  }

  // Remove duplicate h1 if it matches the main title
  $contentContainer.find('h1').each((_, el) => {
    if ($(el).text().trim() === title) {
      $(el).remove()
    }
  })

  // Extract raw body HTML and sanitize
  const rawBodyHtml = $contentContainer.html() || ''
  const sanitizedContentHtml = sanitizeBlogHtml(rawBodyHtml)

  // Ensure content is not empty
  if (!sanitizedContentHtml || sanitizedContentHtml.length < 10) {
    // Fallback: collect paragraphs
    const paragraphs: string[] = []
    $('p').each((_, el) => {
      const text = $(el).text().trim()
      if (text) paragraphs.push(`<p>${text}</p>`)
    })
    const fallbackHtml = paragraphs.join('\n')
    if (!fallbackHtml) {
      throw new Error('Unable to extract meaningful blog content from this HTML. Please ensure it contains article text/body.')
    }
  }

  return {
    title: title || 'Untitled Blog Post',
    slug: slugify(slug),
    excerpt: excerpt || 'No description provided.',
    content: sanitizedContentHtml,
    author,
    publishedAt,
    imagePath,
    status: 'draft',
  }
}
