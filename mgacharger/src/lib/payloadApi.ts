import { products as staticProducts } from "@/data/products";
import { blogs as staticBlogs } from "@/data/blogs";
import { gallery as staticGallery } from "@/data/gallery";
import { galleryProducts } from "@/data/galleryProducts";
import { getImageUrl } from "./getImageUrl";

/**
 * Centralized Payload CMS API Client for MGA Charger Next.js Frontend.
 * Reads base URL from NEXT_PUBLIC_PAYLOAD_URL / PAYLOAD_API_URL / NEXT_PUBLIC_SERVER_URL.
 * Updating .env.local with live production URL automatically updates API endpoints everywhere!
 */
export const PAYLOAD_BASE_URL = (
  process.env.NEXT_PUBLIC_PAYLOAD_URL || 
  process.env.PAYLOAD_API_URL || 
  process.env.NEXT_PUBLIC_SERVER_URL || 
  'http://localhost:3001'
).replace(/\/api$/, '');

export const PAYLOAD_API_URL = `${PAYLOAD_BASE_URL}/api`;

async function fetchPayloadData<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  try {
    const url = `${PAYLOAD_API_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
    const res = await fetch(url, {
      cache: 'no-store',
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
    });

    if (!res.ok) {
      console.warn(`Payload API error ${res.status} at ${url}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.warn(`Payload API network error at ${endpoint}:`, err);
    return null;
  }
}

function resolveProductImageUrl(doc: any): string {
  if (doc.featuredImage?.url) return getImageUrl(doc.featuredImage.url);
  if (doc.imagePath && typeof doc.imagePath === 'string' && doc.imagePath.trim() !== '') {
    return getImageUrl(doc.imagePath);
  }
  if (doc.slug) {
    return `/products/${doc.slug}.png`;
  }
  return '/products/mga-intelligent-hawk-multi-channel-battery-station.png';
}

// ----------------------------------------------------
// PRODUCTS API
// ----------------------------------------------------
export async function getProducts(params?: { category?: string; featured?: boolean }): Promise<any[]> {
  const queryParts: string[] = ['limit=100'];
  
  if (params?.category && params.category !== 'all') {
    queryParts.push(`where[categoryName][equals]=${encodeURIComponent(params.category)}`);
  }
  if (params?.featured) {
    queryParts.push(`where[featured][equals]=true`);
  }

  const queryString = queryParts.length > 0 ? `?${queryParts.join('&')}` : '';
  const result = await fetchPayloadData<{ docs: any[] }>(`/products${queryString}`);

  if (result && Array.isArray(result.docs)) {
    return result.docs.map((doc) => ({
      id: String(doc.id),
      name: doc.name,
      slug: doc.slug,
      category: doc.categoryName || (typeof doc.category === 'object' ? doc.category?.slug : 'automotive'),
      categoryName: doc.categoryName || 'Automotive Charger',
      shortDescription: doc.shortDescription || '',
      description: doc.description || '',
      image: resolveProductImageUrl(doc),
      gallery: (doc.gallery || []).map((g: any) => getImageUrl(g.image?.url || g.imagePath || resolveProductImageUrl(doc))),
      specifications: doc.specifications || [],
      features: (doc.features || []).map((f: any) => f.feature || f),
      featured: Boolean(doc.featured),
    }));
  }

  // Use local data only when the CMS request itself failed.
  let filtered = [...staticProducts];
  if (params?.category && params.category !== 'all') {
    filtered = filtered.filter((p) => p.category === params.category);
  }
  if (params?.featured) {
    filtered = filtered.filter((p) => p.featured);
  }
  return filtered;
}

export async function getProductBySlug(slug: string): Promise<any | null> {
  const result = await fetchPayloadData<{ docs: any[] }>(`/products?where[slug][equals]=${encodeURIComponent(slug)}`);

  if (result && Array.isArray(result.docs) && result.docs.length > 0) {
    const doc = result.docs[0];
    return {
      id: String(doc.id),
      name: doc.name,
      slug: doc.slug,
      category: doc.categoryName || 'automotive',
      categoryName: doc.categoryName || 'Automotive Charger',
      shortDescription: doc.shortDescription || '',
      description: doc.description || '',
      image: resolveProductImageUrl(doc),
      gallery: (doc.gallery || []).map((g: any) => getImageUrl(g.image?.url || g.imagePath || resolveProductImageUrl(doc))),
      specifications: doc.specifications || [],
      features: (doc.features || []).map((f: any) => f.feature || f),
      featured: Boolean(doc.featured),
    };
  }

  if (result && Array.isArray(result.docs)) {
    return null;
  }

  return staticProducts.find((p) => p.slug === slug) || null;
}

// ----------------------------------------------------
// BLOGS API
// ----------------------------------------------------
// Helper function to resolve blog image cleanly from Payload CMS or fallback
function getBlogImage(doc: any): string {
  if (doc.featuredImage?.url) {
    return getImageUrl(doc.featuredImage.url);
  }
  if (typeof doc.featuredImage === 'string' && doc.featuredImage.trim() !== '') {
    return getImageUrl(doc.featuredImage);
  }
  if (doc.imagePath && typeof doc.imagePath === 'string' && doc.imagePath.trim() !== '') {
    return getImageUrl(doc.imagePath);
  }
  const matched = staticBlogs.find((b) => b.slug === doc.slug);
  if (matched?.image) {
    return getImageUrl(matched.image);
  }
  return '/images/ev-charger-guide.jpg';
}

export async function getBlogs(): Promise<any[]> {
  const result = await fetchPayloadData<{ docs: any[] }>(`/blogs?where[status][equals]=published&sort=-publishedAt`);

  if (result && Array.isArray(result.docs) && result.docs.length > 0) {
    return result.docs.map((doc) => {
      const img = getBlogImage(doc);
      return {
        id: String(doc.id),
        title: doc.title,
        slug: doc.slug,
        excerpt: doc.excerpt || '',
        content: doc.content || '',
        date: doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'Feb 15, 2026',
        author: doc.author || 'MGA Engineering Team',
        image: img,
        imagePath: img,
      };
    });
  }

  return staticBlogs;
}

export async function getBlogBySlug(slug: string): Promise<any | null> {
  const result = await fetchPayloadData<{ docs: any[] }>(`/blogs?where[slug][equals]=${encodeURIComponent(slug)}`);

  if (result && Array.isArray(result.docs) && result.docs.length > 0) {
    const doc = result.docs[0];
    const img = getBlogImage(doc);
    return {
      id: String(doc.id),
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt || '',
      content: doc.content || '',
      date: doc.publishedAt ? new Date(doc.publishedAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'Feb 15, 2026',
      author: doc.author || 'MGA Engineering Team',
      image: img,
      imagePath: img,
    };
  }

  return staticBlogs.find((b) => b.slug === slug) || null;
}

// ----------------------------------------------------
// GALLERY API
// ----------------------------------------------------
export async function getGalleryItems(): Promise<any[]> {
  const result = await fetchPayloadData<{ docs: any[] }>(`/gallery?limit=100&sort=-createdAt`);

  if (result && Array.isArray(result.docs) && result.docs.length > 0) {
    return result.docs.map((doc, idx) => {
      const fallback = galleryProducts[idx % galleryProducts.length];
      return {
        id: String(doc.id || idx),
        slug: doc.slug || fallback.slug,
        title: doc.title || doc.filename || fallback.title,
        category: doc.categoryName || (typeof doc.category === 'object' ? doc.category?.name : fallback.category),
        modelGrade: doc.modelGrade || fallback.modelGrade,
        rating: doc.rating || fallback.rating,
        reviews: doc.reviews || fallback.reviews,
        shortDescription: doc.shortDescription || fallback.shortDescription,
        description: doc.description || fallback.description,
        specifications: doc.specifications || fallback.specifications,
        features: doc.features || fallback.features,
        src: getImageUrl(doc.url || (doc.filename ? `/api/gallery/file/${doc.filename}` : fallback.src)),
      };
    });
  }

  return galleryProducts;
}

// ----------------------------------------------------
// ENQUIRIES SUBMISSION API
// ----------------------------------------------------
export async function submitEnquiryToCMS(formData: Record<string, any>): Promise<{ success: boolean; message?: string }> {
  try {
    const url = `${PAYLOAD_API_URL}/enquiries`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      return { success: true, message: 'Enquiry submitted successfully!' };
    }
    return { success: false, message: 'Failed to submit enquiry to CMS.' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Network error submitting enquiry.' };
  }
}

// ----------------------------------------------------
// WARRANTY REGISTRATION SUBMISSION API
// ----------------------------------------------------
export async function submitWarrantyToCMS(formData: Record<string, any>): Promise<{ success: boolean; message?: string }> {
  try {
    const url = `${PAYLOAD_API_URL}/warranty-registrations`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      return { success: true, message: 'Warranty registered successfully!' };
    }
    return { success: false, message: 'Failed to submit warranty registration to CMS.' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Network error submitting warranty registration.' };
  }
}
