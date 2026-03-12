// ─────────────────────────────────────────────────────────────────────────────
// DIRECTUS API LAYER
//
// Replace DIRECTUS_URL with your actual Directus instance URL.
// The mock data below simulates what Directus REST /items/:collection returns.
// To go live, remove mockDirectusData and uncomment the real fetch call.
// ─────────────────────────────────────────────────────────────────────────────

export const DIRECTUS_URL = import.meta.env.VITE_DIRECTUS_URL ?? 'https://your-directus-instance.com';

const mockDirectusData = {
  hero_banner: {
    data: {
      id: 1,
      title: "The World's 50 Best Restaurants 2025",
      subtitle: "Discover the venues voted into the 1-50 list",
      image_url: "https://www.theworlds50best.com/filestore/jpg/W50BR25-banner.jpg",
      cta_label: "See the List",
      cta_url: "/list/1-50",
    },
  },

  award_cards: {
    data: [
      {
        id: 1,
        name: "Maido, Lima",
        award: "The World's Best Restaurant 2025",
        sponsor: "Sponsored by S.Pellegrino & Acqua Panna",
        image_url: "https://framerusercontent.com/images/i4H5coMaQ7O5MUFQ304jQq5tNV0.jpg?width=1500&height=1001",
        url: "/the-list/maido.html",
        featured: true,
      },
      {
        id: 2,
        name: "Mindy Woods",
        award: "Champions of Change Award 2025",
        sponsor: null,
        image_url: "https://www.theworlds50best.com/filestore/jpg/IMG_4020_ChampionsofchangeW50BR25.jpg",
        url: "/awards/champions-of-change.html",
        featured: false,
      },
      {
        id: 3,
        name: "Khufu's, Cairo",
        award: "Resy One To Watch Award 2025",
        sponsor: null,
        image_url: "https://www.theworlds50best.com/filestore/jpg/W50BR25-OTW-Khufus.jpg",
        url: "/awards/one-to-watch.html",
        featured: false,
      },
      {
        id: 4,
        name: "Wing, Hong Kong",
        award: "Gin Mare Art of Hospitality Award 2025",
        sponsor: null,
        image_url: "https://www.theworlds50best.com/filestore/jpg/W50BR25-AoH-Wing-widget.jpg",
        url: "/awards/art-of-hospitality-award.html",
        featured: false,
      },
      {
        id: 5,
        name: "Pichaya 'Pam' Soontornyanakij",
        award: "The World's Best Female Chef 2025",
        sponsor: null,
        image_url: "https://www.theworlds50best.com/filestore/jpg/W50BR25-BFC-ChefPam.jpg",
        url: "/awards/best-female-chef.html",
        featured: false,
      },
      {
        id: 6,
        name: "Albert Adrià",
        award: "Estrella Damm Chefs' Choice Award 2025",
        sponsor: null,
        image_url: "https://www.theworlds50best.com/filestore/jpg/Albert Adria Summary Box W50BR25.jpg",
        url: "/awards/chefs-choice-award.html",
        featured: false,
      },
      {
        id: 7,
        name: "Celele, Cartagena",
        award: "Sustainable Restaurant Award 2025",
        sponsor: null,
        image_url: "https://www.theworlds50best.com/filestore/jpg/Celele Summary Box W50BR25.jpg",
        url: "/awards/sustainable-restaurant-award.html",
        featured: false,
      },
      {
        id: 8,
        name: "Massimo Bottura & Lara Gilmore",
        award: "Woodford Reserve Icon Award 2025",
        sponsor: null,
        image_url: "https://www.theworlds50best.com/filestore/jpg/Massimo and Lara Summary Box W50BR25.jpg",
        url: "/awards/icon-award.html",
        featured: false,
      },
      {
        id: 9,
        name: "Potong, Bangkok",
        award: "Highest New Entry Award 2025",
        sponsor: null,
        image_url: "https://www.theworlds50best.com/filestore/jpg/Potong Summary Box W50BR25.jpg",
        url: "/awards/highest-new-entry-award.html",
        featured: false,
      },
      {
        id: 10,
        name: "Ikoyi, London",
        award: "Highest Climber Award 2025",
        sponsor: "Sponsored by Lee Kum Kee",
        image_url: "https://www.theworlds50best.com/filestore/jpg/Ikoyi Summary Box W50BR25.jpg",
        url: "/awards/highest-climber.html",
        featured: false,
      },
    ],
  },

  stories: {
    data: [
      {
        id: 1,
        title: "Inside Maido: How Mitsuharu Tsumura Built the World's Best Restaurant",
        category: "Feature",
        date: "2025-06-15",
        image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
        url: "/stories/maido-world-best",
        excerpt: "A deep dive into the Nikkei philosophy that put Lima on the global culinary map.",
      },
      {
        id: 2,
        title: "The Rising Stars of Asia's Dining Scene",
        category: "Discovery",
        date: "2025-06-10",
        image_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
        url: "/stories/asia-rising-stars",
        excerpt: "From Seoul to Singapore, the next generation of chefs reshaping what fine dining means.",
      },
      {
        id: 3,
        title: "Sustainability in the Kitchen: Beyond the Buzzword",
        category: "Sustainability",
        date: "2025-06-05",
        image_url: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
        url: "/stories/sustainability-kitchen",
        excerpt: "How Celele and others are making environmental responsibility a cornerstone of excellence.",
      },
      {
        id: 4,
        title: "The Art of Pastry: Maxime Frédéric's Sweet Revolution",
        category: "Chefs",
        date: "2025-05-28",
        image_url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80",
        url: "/stories/maxime-frederic-pastry",
        excerpt: "The World's Best Pastry Chef on precision, emotion, and the perfect mille-feuille.",
      },
    ],
  },

  partners: {
    data: [
      { id: 1, name: "S.Pellegrino & Acqua Panna",  tier: "title",    logo_url: "https://www.theworlds50best.com/filestore/jpg/S.pellegrino-logo%20(3).jpg",           url: "/partners/spellegrino-acqua-panna.html" },
      { id: 2, name: "Visit Piemonte",              tier: "title",    logo_url: "https://www.theworlds50best.com/filestore/jpg/new-piedmont-logo-mockup.jpg",           url: "/partners/visit-piemonte.html" },
      { id: 3, name: "SevenRooms",                  tier: "official", logo_url: "https://www.theworlds50best.com/filestore/jpg/sevenrooms-logo-v3.jpg",                 url: "/partners/sevenrooms.html" },
      { id: 4, name: "DoorDash",                    tier: "official", logo_url: "https://www.theworlds50best.com/filestore/jpg/Doordash-Logo-tier2.jpg",                url: "/partners/doordash.html" },
      { id: 5, name: "Estrella Damm",               tier: "official", logo_url: "https://www.theworlds50best.com/filestore/jpg/Estrella-logo-world-tier2mo.jpg",        url: "/partners/estrella-damm.html" },
      { id: 6, name: "Gin Mare",                    tier: "official", logo_url: "https://www.theworlds50best.com/filestore/jpg/GinMare updated-logo-tier2.jpg",         url: "/partners/gin-mare.html" },
      { id: 7, name: "Woodford Reserve",            tier: "official", logo_url: "https://www.theworlds50best.com/filestore/jpg/Woodford-Reserve-updated.jpg",           url: "/partners/Woodford-Reserve.html" },
      { id: 8, name: "Sosa Ingredients",            tier: "official", logo_url: "https://www.theworlds50best.com/filestore/jpg/logo-sosa.jpg",                          url: "/partners/sosa.html" },
    ],
  },
};

/**
 * Fetch a Directus collection.
 *
 * MOCK MODE (current): returns local data with a simulated delay.
 *
 * PRODUCTION: replace the body with:
 *   const res = await fetch(`${DIRECTUS_URL}/items/${collection}?fields=*`);
 *   const json = await res.json();
 *   return json.data;
 */
export async function fetchCollection(collection) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 400));
  return mockDirectusData[collection]?.data ?? [];
}
