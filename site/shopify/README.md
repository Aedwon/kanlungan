# Shopify setup for wave 3

The default provider reads `src/data`. When both environment variables in `.env.example` are set, Shop pages use Shopify Storefront API `2026-01` over server-side GraphQL fetch. Makers' stories remain in `src/data/makers.ts`. No SDK or additional dependency is required. The store's currency must be PHP; prices include VAT. Errors from a configured store are surfaced rather than silently substituting local products.

## Definitions to create before importing

In Settings > Custom data > Products, create these definitions exactly. Enable Storefront access (`PUBLIC_READ`) for each definition. Values use the `custom` namespace.

| Name | Namespace and key | Shopify type |
|---|---|---|
| Maker | `custom.maker` | `single_line_text_field` |
| Materials | `custom.materials` | `single_line_text_field` |
| Dimensions | `custom.dimensions` | `single_line_text_field` |
| Origin | `custom.origin` | `single_line_text_field` |
| Availability state | `custom.availability_state` | `single_line_text_field` |
| Lead time weeks | `custom.lead_time_weeks` | `number_integer` |
| One of a kind | `custom.one_of_a_kind` | `boolean` |
| Subcategory | `custom.subcategory` | `single_line_text_field` |
| Price unit | `custom.price_unit` | `single_line_text_field` |

Availability state accepts `in-stock`, `made-to-order`, `sold-out`, or `one-of-a-kind`. Dimensions are centimeters. Lead time weeks is empty for in-stock pieces. Price unit is `per panel` for Tabing Linen Curtain and empty otherwise. Maker contains the exact maker display name, or `Kanlungan Original`. It is a text value, not a reference to a Shopify vendor object.

Under Variants, also create **Lead time weeks**, `custom.lead_time_weeks`, type `number_integer`, Storefront access `PUBLIC_READ`. A variant's value overrides the product's lead time. The current seed gives every variant its product's lead time; no variant-specific durations were authored. Shopify product CSV cannot import variant metafields. Set any future variant overrides through the variant editor or Admin API after importing.

Under Collections, create **Collection type**, `custom.collection_type`, type `single_line_text_field`, Storefront access `PUBLIC_READ`. Use one of `Room-based`, `Mood and lifestyle`, `Material-based`.

## Collections to create

Create these seven automated collections. Set the URL handle exactly, set the collection type metafield, and add the condition **Product tag is equal to** the tag below. Publish every collection to the Headless storefront sales channel. The CSV supplies the tags, allowing products to belong to multiple collections.

| Name | Handle | Collection type | Exact tag |
|---|---|---|---|
| Living Room | `living-room` | Room-based | `collection:living-room` |
| Dining Room | `dining-room` | Room-based | `collection:dining-room` |
| Bedroom | `bedroom` | Room-based | `collection:bedroom` |
| Quiet Living | `quiet-living` | Mood and lifestyle | `collection:quiet-living` |
| Slow Mornings | `slow-mornings` | Mood and lifestyle | `collection:slow-mornings` |
| Woven Forms | `woven-forms` | Material-based | `collection:woven-forms` |
| Stone and Clay | `stone-and-clay` | Material-based | `collection:stone-and-clay` |

Membership updates use the existing seven collections and the same metafields. The CSV adds Yakap and Bakal to Living Room, Salo to Dining Room, Unan and Bakal to Bedroom, Yakap to Quiet Living, and Salo to Stone and Clay. No new collection handles or metafield definitions are needed.

Copy these authored descriptions:

- Quiet Living: Soft light, low furniture, and nothing that asks for attention.
- Slow Mornings: Pieces for the first hour of the day.
- Woven Forms: Cane, rattan, and reed, woven by hand.
- Stone and Clay: Honed stone and fired clay, cool to the touch.

The three room collections have no authored description. Leave them empty. Collection membership comes from `src/data/collections.ts`; category routing uses the CSV's product Type, not extra Shopify collections. Keep product handles and exact maker names when editing products so existing studio links remain valid.

## Import steps

1. Create a free Partner development store, select PHP currency and a single inventory location, and create the definitions above. The CSV uses Shopify's compatible legacy column names and current product metafield headers.
2. Run `node scripts/build-shopify-csv.mjs` from `site/`. It writes `shopify/products.csv`: 36 products and 94 variant rows, plus one header. It expands every Fabric, Size, Finish, Shelf finish, and Color combination and preserves every listed variant price. The first variant uses the seed product's displayed base price.
3. In Products > Import, upload `products.csv` and review Shopify's preview. Confirm 36 products and the variant options, prices, vendor, Type, tags, and product metafields. Then import. No images are imported because photography is pending. Existing product updates require the matching handles; review Shopify's overwrite options before using the file on a populated store.
4. Create and publish the seven collections using the rules above. Publish all imported products to the Headless sales channel. Enable unauthenticated product-listing, product-inventory, and product-metafield read access for its public Storefront token. Allow required product and collection metafield definitions to be read by Storefront.
5. Verify Kiso Stool tracks inventory at quantity 0 and denies sales when out of stock. Tanghali tracks inventory at quantity 1. Other seed pieces have inventory tracking off, avoiding invented stock quantities. Made-to-order pieces stay purchasable and show their authored production lead time. Check actual available inventory at the active fulfillment location after import.
6. Put the store's `your-store.myshopify.com` hostname in `SHOPIFY_STORE_DOMAIN` and the public Storefront token in `SHOPIFY_STOREFRONT_PUBLIC_TOKEN` in `.env.local`. Both variables are required to select Shopify. Restart or rebuild the site after changing them. Product and collection responses are cached; edits can take up to the route cache's revalidation interval to appear.
7. Check product, category, collection, maker, variant-price, stock, and lead-time views with the connected store. Test `silong-sofa` at ₱186,000 and its two-seat option at ₱158,000, plus Kiso's notification state and Tanghali's one-of-a-kind label. Live Shopify import and reads have not been run by the implementor because store credentials are not supplied.

The cart in this wave is the authorized localStorage demo cart. Wave 4 implements the cart drawer, Storefront cart integration, and the site's own demo checkout. Never use Shopify's hosted checkout for the public demo.

References: [Storefront API products, 2026-01](https://shopify.dev/docs/api/storefront/2026-01/queries/products), [Shopify product CSV format](https://help.shopify.com/en/manual/products/import-export/using-csv), [Storefront metafield access](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).
