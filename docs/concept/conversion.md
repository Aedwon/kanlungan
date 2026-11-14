# Conversion

Status of this whole file: **Decided on delegation.**

## Goals

| Rank | Goal | Measured by |
|---|---|---|
| Primary | A visitor books a discovery call with the studio | Submitted booking form |
| Secondary | A visitor buys from the shop | Completed order |
| Supporting | A visitor joins the mailing list | Submitted email |

When two goals compete for the same space, the higher rank wins. The homepage hero, the header button, and the end of every studio page all point to the discovery call.

## Calls to action

Use these labels exactly. Do not invent variants.

| Label | Where | Goes to |
|---|---|---|
| Book a discovery call | Header button, hero, end of studio pages | Booking page |
| View projects | Home, services | Projects index |
| Explore the shop | Home, About | Shop landing |
| Add to cart | Product page | Cart drawer |
| Ask the studio | Product pages, FAQ | Contact form |
| Notify me | Sold-out products | Inline email field |

The header shows one button only: **Book a discovery call**. The cart is an icon with a count, not a button.

## Booking form

One page, one form, no account.

Fields:

1. Full name (required)
2. Email (required)
3. Mobile number (required)
4. Service: Full-Service Furnishing, Interior Design Direction, Not sure yet (required)
5. Property type: Condo, House, Hospitality, Other (required)
6. Location, as city or province (required)
7. Approximate floor area in square meters (optional)
8. Budget range (required): Under ₱1.5M, ₱1.5M to ₱3M, ₱3M to ₱6M, Above ₱6M, Not sure yet
9. Target completion: Within 3 months, 3 to 6 months, More than 6 months, Flexible (optional)
10. Preferred call time: three suggested slots or "Any time" (optional)
11. Tell us about the space (optional, free text)

After submission, the page shows a confirmation with what happens next: "We reply within two business days to confirm your call."

The booking page states the starting prices from `docs/concept/services.md` beside the form. This filters out inquiries below the minimum.

## Contact form

A shorter form for general and product questions: name, email, subject, message. When opened from a product page, the subject is filled with the product name.

## Mailing list

One field in the footer, labeled "Occasional notes on new projects and pieces." No pop-up. No discount for signing up.

## Checkout

The shop demonstrates a complete, believable purchase flow.

- **Cart:** a drawer that opens after "Add to cart," plus a full cart page.
- **Checkout:** guest only. No customer accounts.
- **Steps:** contact, delivery address, delivery method, payment, review. They may share one page.
- **Delivery fee:** follows the rules in `docs/concept/shop.md`.
- **Made-to-order notice:** the cart and the review step show each item's lead time. A mixed order states that in-stock items ship first.
- **Order confirmation:** a page with an order number, a summary, and delivery expectations.

### Demo behavior

Kanlungan is fictional. No real payment is taken and no order is fulfilled.

- The payment step shows card, bank transfer, and e-wallet options as a realistic interface.
- The payment step and the confirmation page each carry this notice: "Kanlungan is a fictional brand. This is a demonstration. No payment is taken and no order is placed."
- **Commerce platform (Locked by Aedwon, 2026-11-14):** headless Shopify on a free Partner development store. Products, collections, inventory, and the cart come from the Shopify Storefront API. The site runs its own checkout screens as designed, and no payment is taken. Shopify's hosted checkout is not used, because development stores are always password protected and would block public visitors. Target cost: ₱0.

## What the site does not have

- Customer accounts or login
- Wishlists
- Product reviews or star ratings
- Live chat
- Pop-ups, countdown timers, or stock-urgency messages
- Discount codes

These would add interface without supporting the two main goals, and several would cheapen the premium position.
