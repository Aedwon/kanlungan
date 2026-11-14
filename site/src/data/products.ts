// Transcribed from docs/content/catalog.md. Prices are Philippine pesos.
export type Availability = "in-stock" | "made-to-order" | "sold-out" | "one-of-a-kind";
export interface ProductVariant { name: string; choices: { label: string; price?: number }[]; effect: string }
export interface Product { slug: string; name: string; category: string; subcategory: string; description: string; price: number; priceUnit: string | null; maker: string; materials: string; dimensions: string; origin: string; availability: Availability; availabilityText: string; leadTimeWeeks: number | null; variants: ProductVariant[] }
export const products: Product[] = [
  {
    "slug": "silong-sofa",
    "name": "Silong Sofa",
    "category": "Seating",
    "subcategory": "Sofas",
    "description": "A low three-seat sofa with a solid wood frame and loose linen cushions.",
    "price": 186000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Plantation mahogany, linen blend, feather and foam fill",
    "dimensions": "228 × 92 × 72",
    "origin": "Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 10 weeks",
    "leadTimeWeeks": 10,
    "variants": [
      {
        "name": "Fabric",
        "choices": [
          {
            "label": "Oat linen"
          },
          {
            "label": "Sand linen"
          },
          {
            "label": "Clay linen"
          },
          {
            "label": "Charcoal linen"
          }
        ],
        "effect": "None"
      },
      {
        "name": "Size",
        "choices": [
          {
            "label": "Three-seat 228 cm"
          },
          {
            "label": "Two-seat 178 cm",
            "price": 158000
          }
        ],
        "effect": "Two-seat is ₱158,000"
      }
    ]
  },
  {
    "slug": "dapithapon-lounge-chair",
    "name": "Dapithapon Lounge Chair",
    "category": "Seating",
    "subcategory": "Lounge chairs",
    "description": "A deep rattan lounge chair with a hand-woven cane back.",
    "price": 64000,
    "priceUnit": null,
    "maker": "Sulihiya Studio",
    "materials": "Rattan, cane, linen cushion",
    "dimensions": "72 × 78 × 74",
    "origin": "Cebu, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 8 weeks",
    "leadTimeWeeks": 8,
    "variants": []
  },
  {
    "slug": "hain-dining-chair",
    "name": "Hain Dining Chair",
    "category": "Seating",
    "subcategory": "Dining chairs",
    "description": "A solid wood dining chair with a woven cane seat.",
    "price": 24500,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Plantation mahogany, cane",
    "dimensions": "48 × 52 × 80",
    "origin": "Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 8 weeks",
    "leadTimeWeeks": 8,
    "variants": [
      {
        "name": "Finish",
        "choices": [
          {
            "label": "Mahogany"
          },
          {
            "label": "Ebonized mahogany"
          },
          {
            "label": "Acacia"
          },
          {
            "label": "Bleached acacia"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "bangko-bench",
    "name": "Bangko Bench",
    "category": "Seating",
    "subcategory": "Stools and benches",
    "description": "A long bench cut from solid acacia with visible joinery.",
    "price": 38000,
    "priceUnit": null,
    "maker": "Lilok Workshop",
    "materials": "Acacia, oil finish",
    "dimensions": "140 × 38 × 45",
    "origin": "Betis, Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 6 weeks",
    "leadTimeWeeks": 6,
    "variants": []
  },
  {
    "slug": "tuntungan-stool",
    "name": "Tuntungan Stool",
    "category": "Seating",
    "subcategory": "Stools and benches",
    "description": "A small carved stool that also works as a side table.",
    "price": 14800,
    "priceUnit": null,
    "maker": "Lilok Workshop",
    "materials": "Acacia, oil finish",
    "dimensions": "34 × 34 × 44",
    "origin": "Betis, Pampanga, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "kiso-stool",
    "name": "Kiso Stool",
    "category": "Seating",
    "subcategory": "Stools and benches",
    "description": "A light stool in pale Japanese cypress.",
    "price": 19500,
    "priceUnit": null,
    "maker": "Okabe Mokko",
    "materials": "Hinoki cypress",
    "dimensions": "36 × 36 × 42",
    "origin": "Nagano, Japan",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "yakap-sofa",
    "name": "Yakap Sofa",
    "category": "Seating",
    "subcategory": "Sofas",
    "description": "A deep, fully upholstered sofa with a removable linen cover.",
    "price": 168000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Linen blend, feather and foam fill, concealed hardwood frame",
    "dimensions": "236 × 98 × 72",
    "origin": "Cebu, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 10 weeks",
    "leadTimeWeeks": 10,
    "variants": [
      {
        "name": "Fabric",
        "choices": [
          {
            "label": "Oat linen"
          },
          {
            "label": "Sand linen"
          },
          {
            "label": "Clay linen"
          },
          {
            "label": "Charcoal linen"
          }
        ],
        "effect": "None"
      },
      {
        "name": "Size",
        "choices": [
          {
            "label": "Three-seat 236 cm"
          },
          {
            "label": "Two-seat 186 cm",
            "price": 142000
          }
        ],
        "effect": "Two-seat is ₱142,000"
      }
    ]
  },
  {
    "slug": "hapag-dining-table",
    "name": "Hapag Dining Table",
    "category": "Tables",
    "subcategory": "Dining tables",
    "description": "A solid wood dining table for six to eight.",
    "price": 178000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Plantation mahogany, oil finish",
    "dimensions": "220 × 95 × 75",
    "origin": "Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 12 weeks",
    "leadTimeWeeks": 12,
    "variants": [
      {
        "name": "Size",
        "choices": [
          {
            "label": "180 cm",
            "price": 152000
          },
          {
            "label": "220 cm",
            "price": 178000
          },
          {
            "label": "260 cm",
            "price": 214000
          }
        ],
        "effect": "₱152,000, ₱178,000, ₱214,000"
      },
      {
        "name": "Finish",
        "choices": [
          {
            "label": "Mahogany"
          },
          {
            "label": "Ebonized mahogany"
          },
          {
            "label": "Acacia"
          },
          {
            "label": "Bleached acacia"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "batis-coffee-table",
    "name": "Batis Coffee Table",
    "category": "Tables",
    "subcategory": "Coffee tables",
    "description": "A honed stone top on a low wood base.",
    "price": 72000,
    "priceUnit": null,
    "maker": "Marmol Atelier",
    "materials": "Romblon marble, mahogany",
    "dimensions": "110 × 60 × 36",
    "origin": "Romblon, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 8 weeks",
    "leadTimeWeeks": 8,
    "variants": []
  },
  {
    "slug": "sulok-side-table",
    "name": "Sulok Side Table",
    "category": "Tables",
    "subcategory": "Side tables",
    "description": "A compact side table with a single shelf.",
    "price": 21000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Acacia, oil finish",
    "dimensions": "40 × 40 × 50",
    "origin": "Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 6 weeks",
    "leadTimeWeeks": 6,
    "variants": [
      {
        "name": "Finish",
        "choices": [
          {
            "label": "Natural"
          },
          {
            "label": "Bleached"
          },
          {
            "label": "Ebonized"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "pasilyo-console-table",
    "name": "Pasilyo Console Table",
    "category": "Tables",
    "subcategory": "Console tables",
    "description": "A slim console with a woven cane lower shelf.",
    "price": 58000,
    "priceUnit": null,
    "maker": "Lilok Workshop",
    "materials": "Ebonized plantation mahogany, natural cane",
    "dimensions": "150 × 38 × 80",
    "origin": "Betis, Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 8 weeks",
    "leadTimeWeeks": 8,
    "variants": []
  },
  {
    "slug": "salo-dining-table",
    "name": "Salo Dining Table",
    "category": "Tables",
    "subcategory": "Dining tables",
    "description": "A round terrazzo table on a single steel pedestal.",
    "price": 126000,
    "priceUnit": null,
    "maker": "Marmol Atelier",
    "materials": "Terrazzo with Romblon marble chips, honed; blackened steel base",
    "dimensions": "Ø130 × 75",
    "origin": "Romblon, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 10 weeks",
    "leadTimeWeeks": 10,
    "variants": [
      {
        "name": "Size",
        "choices": [
          {
            "label": "Ø110 seats four",
            "price": 98000
          },
          {
            "label": "Ø130 seats six",
            "price": 126000
          }
        ],
        "effect": "₱98,000, ₱126,000"
      }
    ]
  },
  {
    "slug": "bakal-side-table",
    "name": "Bakal Side Table",
    "category": "Tables",
    "subcategory": "Side tables",
    "description": "A small spun-steel drinks table with a blackened finish.",
    "price": 18500,
    "priceUnit": null,
    "maker": "Tanso Lighting Works",
    "materials": "Blackened steel, wax finish",
    "dimensions": "Ø38 × 50",
    "origin": "Marikina, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "himlay-bed",
    "name": "Himlay Bed",
    "category": "Beds",
    "subcategory": "Bed frames",
    "description": "A low solid wood bed with a woven cane headboard.",
    "price": 142000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Plantation mahogany, cane, slatted base",
    "dimensions": "168 × 215 × 105",
    "origin": "Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 12 weeks",
    "leadTimeWeeks": 12,
    "variants": [
      {
        "name": "Size",
        "choices": [
          {
            "label": "Queen 168 × 215",
            "price": 142000
          },
          {
            "label": "King 198 × 215",
            "price": 168000
          }
        ],
        "effect": "₱142,000, ₱168,000"
      },
      {
        "name": "Finish",
        "choices": [
          {
            "label": "Mahogany"
          },
          {
            "label": "Ebonized mahogany"
          },
          {
            "label": "Acacia"
          },
          {
            "label": "Bleached acacia"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "duyan-daybed",
    "name": "Duyan Daybed",
    "category": "Beds",
    "subcategory": "Daybeds",
    "description": "A rattan daybed for a terrace, study, or guest room.",
    "price": 78000,
    "priceUnit": null,
    "maker": "Sulihiya Studio",
    "materials": "Rattan, cane, linen cushion",
    "dimensions": "200 × 90 × 70",
    "origin": "Cebu, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 8 weeks",
    "leadTimeWeeks": 8,
    "variants": []
  },
  {
    "slug": "unan-bed",
    "name": "Unan Bed",
    "category": "Beds",
    "subcategory": "Bed frames",
    "description": "A low bed with a padded linen headboard and an upholstered frame.",
    "price": 128000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Linen blend, foam padding, concealed hardwood frame, slatted base",
    "dimensions": "172 × 222 × 100",
    "origin": "Cebu, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 10 weeks",
    "leadTimeWeeks": 10,
    "variants": [
      {
        "name": "Fabric",
        "choices": [
          {
            "label": "Oat linen"
          },
          {
            "label": "Sand linen"
          },
          {
            "label": "Clay linen"
          },
          {
            "label": "Charcoal linen"
          }
        ],
        "effect": "None"
      },
      {
        "name": "Size",
        "choices": [
          {
            "label": "Queen 172 × 222",
            "price": 128000
          },
          {
            "label": "King 202 × 222",
            "price": 152000
          }
        ],
        "effect": "₱128,000, ₱152,000"
      }
    ]
  },
  {
    "slug": "aparador-cabinet",
    "name": "Aparador Cabinet",
    "category": "Storage",
    "subcategory": "Cabinets",
    "description": "A tall cabinet with cane door panels that let air through.",
    "price": 164000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Plantation mahogany, cane, brass hinges",
    "dimensions": "110 × 48 × 170",
    "origin": "Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 12 weeks",
    "leadTimeWeeks": 12,
    "variants": []
  },
  {
    "slug": "baul-credenza",
    "name": "Baul Credenza",
    "category": "Storage",
    "subcategory": "Credenzas",
    "description": "A long, low credenza with sliding wood doors.",
    "price": 128000,
    "priceUnit": null,
    "maker": "Lilok Workshop",
    "materials": "Acacia, oil finish",
    "dimensions": "180 × 45 × 72",
    "origin": "Betis, Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 10 weeks",
    "leadTimeWeeks": 10,
    "variants": [
      {
        "name": "Finish",
        "choices": [
          {
            "label": "Natural"
          },
          {
            "label": "Bleached"
          },
          {
            "label": "Ebonized"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "estante-shelving",
    "name": "Estante Shelving",
    "category": "Storage",
    "subcategory": "Shelving",
    "description": "An open shelving unit with brass fittings.",
    "price": 86000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Blackened steel frame, acacia shelves, brass fittings",
    "dimensions": "100 × 36 × 190",
    "origin": "Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 10 weeks",
    "leadTimeWeeks": 10,
    "variants": [
      {
        "name": "Shelf finish",
        "choices": [
          {
            "label": "Natural"
          },
          {
            "label": "Bleached"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "kapis-pendant",
    "name": "Kapis Pendant",
    "category": "Lighting",
    "subcategory": "Pendant lights",
    "description": "A capiz shell drum that gives a soft, even glow.",
    "price": 32000,
    "priceUnit": null,
    "maker": "Tanso Lighting Works",
    "materials": "Capiz shell, unlacquered brass",
    "dimensions": "Ø48 × 30",
    "origin": "Marikina, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "lenta-pendant",
    "name": "Lenta Pendant",
    "category": "Lighting",
    "subcategory": "Pendant lights",
    "description": "A matte ceramic shade for use over a dining table.",
    "price": 27000,
    "priceUnit": null,
    "maker": "Forma Lenta",
    "materials": "Unglazed stoneware, brass fitting",
    "dimensions": "Ø34 × 26",
    "origin": "Caldas da Rainha, Portugal",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "sinag-floor-lamp",
    "name": "Sinag Floor Lamp",
    "category": "Lighting",
    "subcategory": "Floor lamps",
    "description": "A slim brass floor lamp with a linen shade.",
    "price": 36500,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Brass, linen, acacia base",
    "dimensions": "Ø40 × 155",
    "origin": "Cebu, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 6 weeks",
    "leadTimeWeeks": 6,
    "variants": []
  },
  {
    "slug": "luad-table-lamp",
    "name": "Luad Table Lamp",
    "category": "Lighting",
    "subcategory": "Table lamps",
    "description": "A hand-thrown stoneware base with a linen shade.",
    "price": 14500,
    "priceUnit": null,
    "maker": "Bukal Clayworks",
    "materials": "Stoneware, ash glaze, linen",
    "dimensions": "Ø30 × 46",
    "origin": "Tiwi, Albay, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "tala-wall-light",
    "name": "Tala Wall Light",
    "category": "Lighting",
    "subcategory": "Wall lights",
    "description": "A small brass wall light with an opal glass globe.",
    "price": 11800,
    "priceUnit": null,
    "maker": "Tanso Lighting Works",
    "materials": "Unlacquered brass, opal glass",
    "dimensions": "14 × 18 × 24",
    "origin": "Marikina, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "banig-rug",
    "name": "Banig Rug",
    "category": "Rugs and textiles",
    "subcategory": "Rugs",
    "description": "A handwoven reed rug in a quiet, undyed pattern.",
    "price": 34000,
    "priceUnit": null,
    "maker": "Tikog Loom",
    "materials": "Tikog reed, cotton binding",
    "dimensions": "200 × 300",
    "origin": "Basey, Samar, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 8 weeks",
    "leadTimeWeeks": 8,
    "variants": [
      {
        "name": "Size",
        "choices": [
          {
            "label": "160 × 230",
            "price": 22000
          },
          {
            "label": "200 × 300",
            "price": 34000
          }
        ],
        "effect": "₱22,000, ₱34,000"
      }
    ]
  },
  {
    "slug": "lambot-wool-rug",
    "name": "Lambot Wool Rug",
    "category": "Rugs and textiles",
    "subcategory": "Rugs",
    "description": "A dense hand-tufted wool rug in a warm neutral.",
    "price": 96000,
    "priceUnit": null,
    "maker": "Kanlungan Original",
    "materials": "Wool, cotton backing",
    "dimensions": "240 × 300",
    "origin": "Cebu, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 10 weeks",
    "leadTimeWeeks": 10,
    "variants": [
      {
        "name": "Size",
        "choices": [
          {
            "label": "170 × 240",
            "price": 58000
          },
          {
            "label": "240 × 300",
            "price": 96000
          },
          {
            "label": "300 × 400",
            "price": 164000
          }
        ],
        "effect": "₱58,000, ₱96,000, ₱164,000"
      }
    ]
  },
  {
    "slug": "hablon-cushion",
    "name": "Hablon Cushion",
    "category": "Rugs and textiles",
    "subcategory": "Cushions",
    "description": "A handloomed cotton cushion with a feather insert.",
    "price": 3800,
    "priceUnit": null,
    "maker": "Habol Textiles",
    "materials": "Handloomed cotton, feather insert",
    "dimensions": "50 × 50",
    "origin": "Miagao, Iloilo, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": [
      {
        "name": "Color",
        "choices": [
          {
            "label": "Natural"
          },
          {
            "label": "Indigo"
          },
          {
            "label": "Rust"
          },
          {
            "label": "Moss"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "kumot-throw",
    "name": "Kumot Throw",
    "category": "Rugs and textiles",
    "subcategory": "Throws",
    "description": "A soft handloomed cotton throw.",
    "price": 7200,
    "priceUnit": null,
    "maker": "Habol Textiles",
    "materials": "Handloomed cotton",
    "dimensions": "130 × 180",
    "origin": "Miagao, Iloilo, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": [
      {
        "name": "Color",
        "choices": [
          {
            "label": "Natural"
          },
          {
            "label": "Indigo"
          },
          {
            "label": "Rust"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "tabing-linen-curtain",
    "name": "Tabing Linen Curtain",
    "category": "Rugs and textiles",
    "subcategory": "Curtains",
    "description": "A lined linen curtain panel with a soft drape.",
    "price": 9500,
    "priceUnit": "per panel",
    "maker": "Kanlungan Original",
    "materials": "Linen, cotton lining",
    "dimensions": "140 × 270",
    "origin": "Cebu, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 4 weeks",
    "leadTimeWeeks": 4,
    "variants": [
      {
        "name": "Color",
        "choices": [
          {
            "label": "Oat"
          },
          {
            "label": "White"
          },
          {
            "label": "Sand"
          }
        ],
        "effect": "None"
      }
    ]
  },
  {
    "slug": "salamin-floor-mirror",
    "name": "Salamin Floor Mirror",
    "category": "Decor and objects",
    "subcategory": "Mirrors",
    "description": "A full-length mirror in a solid wood frame.",
    "price": 28000,
    "priceUnit": null,
    "maker": "Lilok Workshop",
    "materials": "Bleached acacia, mirror glass",
    "dimensions": "70 × 4 × 170",
    "origin": "Betis, Pampanga, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 6 weeks",
    "leadTimeWeeks": 6,
    "variants": []
  },
  {
    "slug": "tapayan-vessel",
    "name": "Tapayan Vessel",
    "category": "Decor and objects",
    "subcategory": "Vessels",
    "description": "A large stoneware vessel with a wood-ash glaze.",
    "price": 8600,
    "priceUnit": null,
    "maker": "Bukal Clayworks",
    "materials": "Stoneware, ash glaze",
    "dimensions": "Ø28 × 38",
    "origin": "Tiwi, Albay, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "bilao-tray",
    "name": "Bilao Tray",
    "category": "Decor and objects",
    "subcategory": "Trays",
    "description": "A round woven tray for a coffee table or console.",
    "price": 3400,
    "priceUnit": null,
    "maker": "Sulihiya Studio",
    "materials": "Rattan",
    "dimensions": "Ø42 × 5",
    "origin": "Cebu, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "bato-object",
    "name": "Bato Object",
    "category": "Decor and objects",
    "subcategory": "Sculptural objects",
    "description": "A small carved stone form, each one slightly different.",
    "price": 6800,
    "priceUnit": null,
    "maker": "Marmol Atelier",
    "materials": "Romblon marble, honed",
    "dimensions": "18 × 12 × 22",
    "origin": "Romblon, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "amihan-no-3",
    "name": "Amihan No. 3",
    "category": "Art",
    "subcategory": "Prints",
    "description": "An abstract print by Ines Dalisay, in an edition of 50.",
    "price": 9800,
    "priceUnit": null,
    "maker": "Amihan Editions",
    "materials": "Pigment print on cotton rag paper, unframed",
    "dimensions": "50 × 70",
    "origin": "Quezon City, Philippines",
    "availability": "in-stock",
    "availabilityText": "In stock",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "tanghali",
    "name": "Tanghali",
    "category": "Art",
    "subcategory": "Paintings",
    "description": "A landscape painting by Paolo Sarmiento.",
    "price": 85000,
    "priceUnit": null,
    "maker": "Amihan Editions",
    "materials": "Acrylic on canvas",
    "dimensions": "90 × 120",
    "origin": "Quezon City, Philippines",
    "availability": "one-of-a-kind",
    "availabilityText": "In stock, one of a kind",
    "leadTimeWeeks": null,
    "variants": []
  },
  {
    "slug": "habi-wall-piece",
    "name": "Habi Wall Piece",
    "category": "Art",
    "subcategory": "Wall pieces",
    "description": "A large woven wall piece in reed and abaca.",
    "price": 42000,
    "priceUnit": null,
    "maker": "Tikog Loom",
    "materials": "Tikog reed, abaca, wood rail",
    "dimensions": "90 × 4 × 140",
    "origin": "Basey, Samar, Philippines",
    "availability": "made-to-order",
    "availabilityText": "Made to order, 8 weeks",
    "leadTimeWeeks": 8,
    "variants": []
  }
];
export const featuredProductSlugs = [
  "silong-sofa",
  "hapag-dining-table",
  "dapithapon-lounge-chair",
  "kapis-pendant",
  "aparador-cabinet",
  "tapayan-vessel"
];
export const originalProductSlugs = [
  "silong-sofa", "yakap-sofa", "hapag-dining-table", "unan-bed", "sinag-floor-lamp", "lambot-wool-rug"
];
export const newPieceSlugs = [
  "lenta-pendant", "kiso-stool", "habi-wall-piece", "salo-dining-table", "tanghali", "bakal-side-table"
];
