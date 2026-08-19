import { NextResponse } from 'next/server'
import { extractBlogFromHtml } from '@/lib/htmlExtractor'

export async function POST(req: Request) {
  try {
    let rawHtml = ''

    const contentType = req.headers.get('content-type') || ''
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData()
      const file = formData.get('file') as File | null
      const pastedHtml = formData.get('html') as string | null

      if (file) {
        if (!file.name.endsWith('.html') && !file.name.endsWith('.htm') && file.type !== 'text/html') {
          return NextResponse.json(
            { success: false, error: 'Invalid file format. Please upload a valid .html or .htm file.' },
            { status: 400 }
          )
        }
        if (file.size > 5 * 1024 * 1024) {
          return NextResponse.json(
            { success: false, error: 'File size exceeds 5MB limit. Please upload a smaller HTML file.' },
            { status: 400 }
          )
        }
        rawHtml = await file.text()
      } else if (pastedHtml) {
        rawHtml = pastedHtml
      }
    } else {
      const body = await req.json()
      rawHtml = body.html || ''
    }

    if (!rawHtml || !rawHtml.trim()) {
      return NextResponse.json(
        { success: false, error: 'Empty HTML content provided. Please upload a non-empty HTML file or paste valid HTML content.' },
        { status: 400 }
      )
    }

    // Extract structured data from HTML
    const extractedData = extractBlogFromHtml(rawHtml)

    return NextResponse.json({
      success: true,
      data: extractedData,
    })
  } catch (err: any) {
    console.error('HTML Import error:', err)
    return NextResponse.json(
      {
        success: false,
        error: err.message || 'Failed to parse HTML file. Please verify that the HTML content contains article body.',
      },
      { status: 500 }
    )
  }
}
