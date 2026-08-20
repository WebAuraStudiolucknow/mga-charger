import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '../../../payload.config'

export async function GET() {
  try {
    const payload = await getPayload({ config: configPromise })

    const [
      products,
      blogs,
      publishedBlogs,
      draftBlogs,
      news,
      publishedNews,
      draftNews,
      enquiries,
      newEnquiries,
      warranties,
      pendingWarranties,
      media,
      gallery,
      testimonials,
    ] = await Promise.all([
      payload.count({ collection: 'products' }),
      payload.count({ collection: 'blogs' }),
      payload.count({ collection: 'blogs', where: { status: { equals: 'published' } } }),
      payload.count({ collection: 'blogs', where: { status: { equals: 'draft' } } }),
      payload.count({ collection: 'news' }),
      payload.count({ collection: 'news', where: { status: { equals: 'published' } } }),
      payload.count({ collection: 'news', where: { status: { equals: 'draft' } } }),
      payload.count({ collection: 'enquiries' }),
      payload.count({ collection: 'enquiries', where: { status: { equals: 'NEW' } } }),
      payload.count({ collection: 'warranty-registrations' }),
      payload.count({ collection: 'warranty-registrations', where: { status: { equals: 'NEW' } } }),
      payload.count({ collection: 'media' }),
      payload.count({ collection: 'gallery' }),
      payload.count({ collection: 'testimonials' }),
    ])

    return NextResponse.json({
      success: true,
      stats: {
        products: products.totalDocs,
        blogs: blogs.totalDocs,
        publishedBlogs: publishedBlogs.totalDocs,
        draftBlogs: draftBlogs.totalDocs,
        news: news.totalDocs,
        publishedNews: publishedNews.totalDocs,
        draftNews: draftNews.totalDocs,
        enquiries: enquiries.totalDocs,
        newEnquiries: newEnquiries.totalDocs,
        warranties: warranties.totalDocs,
        pendingWarranties: pendingWarranties.totalDocs,
        media: media.totalDocs,
        gallery: gallery.totalDocs,
        testimonials: testimonials.totalDocs,
      },
    })
  } catch (error: any) {
    console.error('Error fetching dashboard stats:', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch dashboard stats' },
      { status: 500 }
    )
  }
}
