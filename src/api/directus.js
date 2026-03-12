// ─────────────────────────────────────────────────────────────────────────────
// DIRECTUS API LAYER
//
// Replace DIRECTUS_URL with your actual Directus instance URL.
// The mock data below simulates what Directus REST /items/:collection returns.
// To go live, remove mockDirectusData and uncomment the real fetch call.
// ─────────────────────────────────────────────────────────────────────────────

export const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL;
const DIRECTUS_TOKEN = import.meta.env.VITE_DIRECTUS_TOKEN;

/**
 * Convert Directus image ID to full URL
 */
export function getImageUrl(imageId, options = {}) {
  if (!imageId) return null;

  // If it's already a full URL, return as-is
  if (typeof imageId === 'string' && imageId.startsWith('http')) {
    return imageId;
  }

  // Build query params for image transformations + auth token
  const params = new URLSearchParams();
  if (options.width)   params.append('width', options.width);
  if (options.height)  params.append('height', options.height);
  if (options.quality) params.append('quality', options.quality);
  if (options.fit)     params.append('fit', options.fit);

  // Required so <img> tags can load private assets without a Bearer header
  if (DIRECTUS_TOKEN)  params.append('access_token', DIRECTUS_TOKEN);

  return `${DIRECTUS_URL}/assets/${imageId}?${params.toString()}`;
}

/**
 * Transform collection data to replace image IDs with URLs
 */
function transformImages(data, collection) {
  if (!data) return data;

  // Handle single object
  if (!Array.isArray(data)) {
    return transformImageFields(data, collection);
  }

  // Handle array of objects
  return data.map(item => transformImageFields(item, collection));
}

/**
 * Transform image fields in a single item
 */
function transformImageFields(item, collection) {
  const transformed = { ...item };

  // Map of collections to their image fields
  const imageFields = {
    hero_banner: ['image'],
    award_cards: ['image'],
    stories: ['image'],
    partners: ['logo_url'],
  };

  const fields = imageFields[collection] || [];

  fields.forEach(field => {
    if (transformed[field]) {
      transformed[field] = getImageUrl(transformed[field]);
    }
  });

  return transformed;
}

/**
 * Fetch a Directus collection.
 *
 * PRODUCTION MODE: fetches real data from Directus REST API
 */
export async function fetchCollection(collection) {
  try {
    const res = await fetch(`${DIRECTUS_URL}/items/${collection}?fields=*`, {
      headers: {
        ...(DIRECTUS_TOKEN && { 'Authorization': `Bearer ${DIRECTUS_TOKEN}` }),
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch ${collection}: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    const data = json.data;

    // Transform image IDs to full URLs
    return transformImages(data, collection);
  } catch (error) {
    console.error(`Error fetching collection "${collection}":`, error);
    return [];
  }
}