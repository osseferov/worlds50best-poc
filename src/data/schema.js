/**
 * Describes every Directus collection and its fields.
 * Used by <SchemaPanel> to render the live documentation overlay.
 */
export const SCHEMA = [
  {
    name: 'hero_banner',
    endpoint: '/items/hero_banner',
    fields: [
      { name: 'id',         type: 'integer' },
      { name: 'title',      type: 'string'  },
      { name: 'subtitle',   type: 'string'  },
      { name: 'image',  type: 'image'   },
      { name: 'cta_label',  type: 'string'  },
      { name: 'cta_url',    type: 'url'     },
    ],
  },
  {
    name: 'award_cards',
    endpoint: '/items/award_cards',
    fields: [
      { name: 'id',         type: 'integer' },
      { name: 'name',       type: 'string'  },
      { name: 'award',      type: 'string'  },
      { name: 'sponsor',    type: 'string'  },
      { name: 'image',  type: 'image'   },
      { name: 'url',        type: 'url'     },
      { name: 'featured',   type: 'boolean' },
    ],
  },
  {
    name: 'stories',
    endpoint: '/items/stories',
    fields: [
      { name: 'id',         type: 'integer' },
      { name: 'title',      type: 'string'  },
      { name: 'category',   type: 'string'  },
      { name: 'date',       type: 'string'  },
      { name: 'image',  type: 'image'   },
      { name: 'url',        type: 'url'     },
      { name: 'excerpt',    type: 'string'  },
    ],
  },
  {
  name: 'videos',
  endpoint: '/items/videos',
  fields: [
    { name: 'id',            type: 'integer' },
    { name: 'title',         type: 'string'  },
    { name: 'category',      type: 'string'  },
    { name: 'date',          type: 'string'  },
    { name: 'youtube_id',    type: 'string'  },
    { name: 'thumbnail_url', type: 'string'  },
    { name: 'duration',      type: 'string'  },
    { name: 'sort',          type: 'integer' },
  ],
},
  {
    name: 'partners',
    endpoint: '/items/partners',
    fields: [
      { name: 'id',         type: 'integer' },
      { name: 'name',       type: 'string'  },
      { name: 'tier',       type: 'string'  },
      { name: 'logo_url',   type: 'image'   },
      { name: 'url',        type: 'url'     },
    ],
  },
];

export const NAV_ITEMS = ['Lists', 'Awards', 'Stories', 'Discovery', 'Scholarship', 'Voting', 'Partners', 'Press', 'Experiences', 'About', '50 Best'];
