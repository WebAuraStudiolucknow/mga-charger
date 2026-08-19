import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const payloadInstance = await getPayload({ config })

    const [
      totalProducts,
      featuredProducts,
      totalBlogs,
      publishedBlogs,
      draftBlogs,
      totalNews,
      publishedNews,
      draftNews,
      totalEnquiries,
      newEnquiries,
      totalWarranty,
      approvedWarranty,
      pendingWarranty,
      totalGallery,
    ] = await Promise.all([
      payloadInstance.count({ collection: 'products' }),
      payloadInstance.count({ collection: 'products', where: { featured: { equals: true } } }),
      payloadInstance.count({ collection: 'blogs' }),
      payloadInstance.count({ collection: 'blogs', where: { status: { equals: 'published' } } }),
      payloadInstance.count({ collection: 'blogs', where: { status: { equals: 'draft' } } }),
      payloadInstance.count({ collection: 'news' }),
      payloadInstance.count({ collection: 'news', where: { status: { equals: 'published' } } }),
      payloadInstance.count({ collection: 'news', where: { status: { equals: 'draft' } } }),
      payloadInstance.count({ collection: 'enquiries' }),
      payloadInstance.count({ collection: 'enquiries', where: { status: { equals: 'new' } } }),
      payloadInstance.count({ collection: 'warranty-registrations' }),
      payloadInstance.count({ collection: 'warranty-registrations', where: { status: { equals: 'approved' } } }),
      payloadInstance.count({ collection: 'warranty-registrations', where: { status: { equals: 'pending' } } }),
      payloadInstance.count({ collection: 'gallery' }),
    ])

    return NextResponse.json({
      products: { total: totalProducts.totalDocs, featured: featuredProducts.totalDocs },
      blogs: { total: totalBlogs.totalDocs, published: publishedBlogs.totalDocs, draft: draftBlogs.totalDocs },
      news: { total: totalNews.totalDocs, published: publishedNews.totalDocs, draft: draftNews.totalDocs },
      enquiries: { total: totalEnquiries.totalDocs, new: newEnquiries.totalDocs },
      warranty: { total: totalWarranty.totalDocs, approved: approvedWarranty.totalDocs, pending: pendingWarranty.totalDocs },
      gallery: { total: totalGallery.totalDocs },
    })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Failed to fetch stats' }, { status: 500 })
  }
}
