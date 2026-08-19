import ImageKit from 'imagekit'

let instance: ImageKit | null = null

export function getImageKit(): ImageKit {
  if (!instance) {
    instance = new ImageKit({
      publicKey: process.env.IMAGEKIT_PUBLIC_KEY || 'public_placeholder',
      privateKey: process.env.IMAGEKIT_PRIVATE_KEY || 'private_placeholder',
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/mgacharger',
    })
  }
  return instance
}

export function buildTransformedUrl(
  basePath: string,
  transformations?: { width?: number; height?: number; quality?: number; format?: string }
): string {
  const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT || 'https://ik.imagekit.io/mgacharger'
  if (basePath.startsWith('http://') || basePath.startsWith('https://')) {
    return basePath
  }

  const trs: string[] = []
  if (transformations?.width) trs.push(`w-${transformations.width}`)
  if (transformations?.height) trs.push(`h-${transformations.height}`)
  if (transformations?.quality) trs.push(`q-${transformations.quality}`)
  if (transformations?.format) trs.push(`f-${transformations.format}`)

  const trString = trs.length > 0 ? `tr:${trs.join(',')}` : ''
  const cleanPath = basePath.startsWith('/') ? basePath : `/${basePath}`
  
  if (trString) {
    return `${urlEndpoint}/${trString}${cleanPath}`
  }
  return `${urlEndpoint}${cleanPath}`
}
