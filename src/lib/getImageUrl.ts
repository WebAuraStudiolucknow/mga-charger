/**
 * Centralized Image URL Resolver for MGA Charger Frontend.
 * Strictly uses NEXT_PUBLIC_PAYLOAD_URL / NEXT_PUBLIC_SERVER_URL from environment variables.
 * Changing env variable for live production updates image URLs everywhere.
 */
export function getImageUrl(pathOrUrl?: string | null): string {
  if (!pathOrUrl) {
    return '/images/placeholder.jpg'
  }

  // Already a full absolute URL
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl
  }

  const serverUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001'
  const cleanPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  
  return `${serverUrl}${cleanPath}`
}
