// Transcribed from docs/content/catalog.md.
export interface Collection { slug: string; name: string; type: string; description: string | null; productSlugs: string[] }
export const collections: Collection[] = [
  {
    "slug": "living-room",
    "name": "Living Room",
    "type": "Room-based",
    "description": null,
    "productSlugs": [
      "yakap-sofa",
      "bakal-side-table",
      "silong-sofa",
      "dapithapon-lounge-chair",
      "batis-coffee-table",
      "sulok-side-table",
      "baul-credenza",
      "estante-shelving",
      "sinag-floor-lamp",
      "lambot-wool-rug",
      "hablon-cushion",
      "kumot-throw",
      "bilao-tray",
      "tapayan-vessel",
      "tanghali"
    ]
  },
  {
    "slug": "dining-room",
    "name": "Dining Room",
    "type": "Room-based",
    "description": null,
    "productSlugs": [
      "salo-dining-table",
      "hapag-dining-table",
      "hain-dining-chair",
      "bangko-bench",
      "lenta-pendant",
      "kapis-pendant",
      "baul-credenza",
      "banig-rug",
      "tapayan-vessel",
      "amihan-no-3"
    ]
  },
  {
    "slug": "bedroom",
    "name": "Bedroom",
    "type": "Room-based",
    "description": null,
    "productSlugs": [
      "unan-bed",
      "bakal-side-table",
      "himlay-bed",
      "duyan-daybed",
      "sulok-side-table",
      "luad-table-lamp",
      "tala-wall-light",
      "aparador-cabinet",
      "bangko-bench",
      "salamin-floor-mirror",
      "lambot-wool-rug",
      "tabing-linen-curtain",
      "kumot-throw"
    ]
  },
  {
    "slug": "quiet-living",
    "name": "Quiet Living",
    "type": "Mood and lifestyle",
    "description": "Soft light, low furniture, and nothing that asks for attention.",
    "productSlugs": [
      "yakap-sofa",
      "silong-sofa",
      "batis-coffee-table",
      "lambot-wool-rug",
      "luad-table-lamp",
      "tapayan-vessel",
      "bato-object",
      "amihan-no-3"
    ]
  },
  {
    "slug": "slow-mornings",
    "name": "Slow Mornings",
    "type": "Mood and lifestyle",
    "description": "Pieces for the first hour of the day.",
    "productSlugs": [
      "hapag-dining-table",
      "hain-dining-chair",
      "lenta-pendant",
      "kiso-stool",
      "bilao-tray",
      "kumot-throw",
      "tabing-linen-curtain"
    ]
  },
  {
    "slug": "woven-forms",
    "name": "Woven Forms",
    "type": "Material-based",
    "description": "Cane, rattan, and reed, woven by hand.",
    "productSlugs": [
      "himlay-bed",
      "duyan-daybed",
      "dapithapon-lounge-chair",
      "hain-dining-chair",
      "pasilyo-console-table",
      "aparador-cabinet",
      "banig-rug",
      "bilao-tray",
      "habi-wall-piece"
    ]
  },
  {
    "slug": "stone-and-clay",
    "name": "Stone and Clay",
    "type": "Material-based",
    "description": "Honed stone and fired clay, cool to the touch.",
    "productSlugs": [
      "salo-dining-table",
      "batis-coffee-table",
      "bato-object",
      "tapayan-vessel",
      "luad-table-lamp",
      "lenta-pendant"
    ]
  }
];
