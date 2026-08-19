/**
 * Centralized Image URL Resolver using NEXT_PUBLIC_SERVER_URL.
 * Changing NEXT_PUBLIC_SERVER_URL in .env updates fallback image URLs everywhere across production & local.
 */
export function getImageUrl(pathOrUrl?: string | null): string {
  if (!pathOrUrl) {
    return '/images/placeholder.jpg'
  }

  // Already a full absolute URL
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl
  }

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001'
  const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  
  return `${serverUrl}${cleanPath}`
}
