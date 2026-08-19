/**
 * Centralized Image URL Resolver for MGA Charger Frontend.
 * Properly distinguishes between local static Next.js assets (e.g. /images/..., /products/...)
 * and Payload CMS backend media uploads (e.g. http://... or /api/media/...).
 */
export function getImageUrl(pathOrUrl?: string | null): string {
  if (!pathOrUrl || typeof pathOrUrl !== 'string' || pathOrUrl.trim() === '') {
    return '/images/ev-charger-guide.jpg';
  }

  const cleanPath = pathOrUrl.trim();

  // 1. Already a full absolute URL
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath;
  }

  // 2. Payload CMS media/upload API paths
  if (cleanPath.startsWith('/api/') || cleanPath.startsWith('/media/') || cleanPath.startsWith('/uploads/')) {
    const serverUrl = (process.env.NEXT_PUBLIC_PAYLOAD_URL || process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3001').replace(/\/$/, '');
    const formattedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    return `${serverUrl}${formattedPath}`;
  }

  // 3. Local static frontend asset path in Next.js public directory
  return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
}
