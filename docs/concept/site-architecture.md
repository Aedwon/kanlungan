# Site architecture

Status of this whole file: **Decided on delegation.**

This file fixes what each page contains and in what order. It does not fix how pages look. Layout, type, color, and motion are design decisions.

## Site map

```
Home
Studio
  Full-Service Furnishing
  Interior Design Direction
Projects
  Project detail (one per project)
Shop
  Category (7: Seating, Tables, Storage, Lighting, Rugs and Textiles, Decor and Objects, Art)
  Collections
    Collection detail
  Makers
    Maker detail
  Product detail
About
Book a discovery call
Contact
Cart
Checkout
  Order confirmation
Search results
Help
  Delivery and returns
  Care guide
  FAQ
Legal
  Privacy
  Terms
404
```

There is no journal or blog. Projects carry the editorial weight.

## Navigation

### Header

Left to right on desktop:

- Logo, links to Home
- Studio, Projects, Shop, About
- Search icon, cart icon with count
- Button: **Book a discovery call**

**Shop** opens a panel with three columns: categories, collections, and a link to makers. **Studio** opens a small panel with the two services. Projects and About are plain links.

On mobile, the header shows the logo, the cart icon, and a menu icon. The menu holds everything else, with the booking button fixed at the bottom of the menu.

### Footer

- Studio: Full-Service Furnishing, Interior Design Direction, Projects, About
- Shop: the seven categories, Collections, Makers
- Help: Delivery and returns, Care guide, FAQ, Contact
- Mailing list field
- Showroom address, email, by-appointment note
- Privacy, Terms
- The fictional-brand notice from `docs/content/copy.md`

## Page structures

Sections are listed in order from top to bottom.

### Home

1. **Hero.** One full project image, the tagline, and **Book a discovery call**. Secondary link: **View projects**.
2. **Statement.** Two or three sentences on what Kanlungan is.
3. **Featured projects.** Three projects, each with image, name, location, and type.
4. **Services.** The two services side by side, each with one line and a link.
5. **Shop introduction.** One line on the shop, then three collections.
6. **Featured pieces.** Four to six products, with at least two Kanlungan Originals.
7. **Makers and craft.** One image and a short text on Philippine makers, linked to Makers.
8. **Process.** The furnishing process in four to six short steps.
9. **Closing call to action.** **Book a discovery call**, with the starting price.

The studio owns sections 1 to 4. The shop starts at section 5. This order enforces "studio first, shop second."

### Studio

1. Statement on how the studio works
2. The two services, with who each one is for
3. A comparison of what each service includes
4. What Kanlungan does not do
5. Two featured projects
6. Closing call to action

### Service page (one template, two pages)

1. Service name, one-line promise, and hero image
2. Who it is for
3. What is included
4. Process steps with typical duration
5. Starting price and how fees work
6. Two or three projects delivered through this service
7. What Kanlungan does not do
8. Five or six frequently asked questions
9. Closing call to action

### Projects index

1. Short introduction
2. Filter: All, Residential, Hospitality
3. Project list. Each entry shows image, name, location, type, and service.

### Project detail

1. Hero image and project name
2. Facts: location, type, floor area, service, year, scope
3. The brief, in two or three sentences
4. The approach, as text mixed with images
5. Gallery of 8 to 12 images
6. Material palette, as four to six materials with names
7. **Shop the project.** Shop products used in the project.
8. Next project
9. Closing call to action

### Shop landing

1. Short introduction with one image
2. Categories, all seven
3. Featured collections, three
4. Kanlungan Originals, four to six products
5. Makers, three with a link to all
6. New pieces, four to eight products
7. One quiet prompt for Full-Service Furnishing

### Category

1. Category name and one line
2. Subcategory links. Show only subcategories that have products.
3. Filters: maker, material, availability, price range. Sort: featured, newest, price.
4. Product grid. Each card shows image, name, maker, price, and availability state.

### Collections index and collection detail

Index: a list of collections grouped by type, with room-based collections first.

Detail:

1. Collection name, a short text, and a hero image of a styled room
2. Products in the collection, mixed with one or two room images
3. Related project, when one exists
4. Furnishing prompt

### Makers index and maker detail

Index: all makers with image, name, place, and craft.

Detail: image, name, place, a story of 80 to 150 words, and the maker's products.

### Product detail

1. Image gallery of four to six images, with at least one in a room
2. Name, maker or **Kanlungan Original**, price
3. One-line description
4. Options: finish or fabric, then size
5. Availability state and lead time
6. **Add to cart**
7. "Need a different size or finish? Ask the studio." Shown for made-to-order products only.
8. Details: materials, dimensions, origin, care when relevant
9. Delivery and returns summary
10. Maker story, short, with a link to the maker
11. **Seen in.** Projects that used the product, when any exist.
12. Pairs well with: three or four products from the same collection

### About

1. Statement and the meaning of the name
2. How the studio works and what it believes
3. The team, shown as a group and by role, without invented names
4. Makers and craft
5. Showroom: address, by-appointment note, image
6. Closing call to action

### Book a discovery call

1. Short heading and what to expect
2. The form from `docs/concept/conversion.md`
3. Beside the form: starting prices, call length, and reply time
4. Confirmation state

### Cart, checkout, order confirmation

Follow `docs/concept/conversion.md`.

### Search results

Products first, then projects, then pages.

## Core journeys

### 1. Homeowner books a call

Home, then Projects, then one Project detail, then Full-Service Furnishing, then Book a discovery call.

The visitor must be able to reach the booking page from any of these pages in one click.

### 2. Shopper buys one piece

Entry on a Collection or Category page, then Product detail, then Cart, then Checkout, then Order confirmation.

The visitor must understand lead time before adding to cart, not at checkout.

### 3. Shopper becomes a studio lead

Product detail, then **Seen in** project, then Project detail, then Full-Service Furnishing, then Book a discovery call.

This journey is why the shop and the studio link in both directions.

### 4. Hospitality owner checks credibility

Home, then Projects filtered to Hospitality, then Project detail, then About, then Book a discovery call.

## Page priority for design

1. Home
2. Project detail
3. Product detail
4. Service page
5. Shop landing
6. Category
7. Book a discovery call
8. Collection detail
9. Cart and checkout
10. Projects index
11. About
12. Maker detail, Studio, Help, Search, 404
