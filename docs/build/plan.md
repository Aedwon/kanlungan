# Build plan

Status: **Approved scope: Balanced** (Aedwon, 2026-11-14).

## Goal

A working website built from the approved templates in `design/round-2-templates/`, using the locked visual system (`docs/design/visual-system.md`, `design/tokens/tokens.json`). Products come from a free Shopify Partner development store through the Storefront API. Checkout is the site's own demo flow; no payment is taken. Target cost: ₱0.

## Stack

- Next.js 16 (App Router, TypeScript), deployed on Vercel's free Hobby tier
- Shopify Storefront API (GraphQL) for products, collections, and cart
- Plain CSS with custom properties generated from `design/tokens/tokens.json`. Scroll effects use CSS scroll-driven animation, as in the templates
- Fonts: Newsreader and Hanken Grotesk through `next/font`
- Studio content (projects, services, makers, copy) from the Markdown files in `docs/content/`, read at build time
- Images: placeholders until the generated photography lands in `design/photography/`

## Scope (Balanced)

Every designed page and state:
- Home, Studio, both service pages, Projects index and all five project pages, About
- Shop landing, all eight categories with filters and sort, all seven collections, Makers index and all ten makers, every product page with options and all four availability states
- Book a discovery call (form, validation, confirmation), Contact
- Cart drawer, cart page, demo checkout, order confirmation
- Search, Help pages, 404, Privacy and Terms
- Header states (Shop and Studio panels, mobile menu), footer with mailing list and the fictional-brand notice

Out of scope here: automated test suites beyond basic checks, CI audits, analytics (Hardened scope).

## Waves

Each wave runs one implementor at a time (Codex first, to save Claude usage; Sonnet when Codex cannot). The lead checks every wave before the next starts. See `SUBAGENTS.md`.

1. **Foundation:** scaffold Next.js app in `site/`; tokens to CSS variables; fonts; header (all states) and footer; base components from `T-components`; content loaders for `docs/content/`; Home. Uses a local catalog file until Shopify is connected.
2. **Studio pages:** Studio, services, Projects index and detail, About.
3. **Shopify:** Storefront API client, product sync script to seed the 36 products and 7 collections into the dev store, shop landing, categories, collections, product pages, makers.
4. **Cart and checkout:** cart drawer and page (Storefront cart), demo checkout and confirmation, booking and contact forms.
5. **Finish:** search, help, legal, 404, image swap to generated photography, accessibility and performance pass, Vercel deploy.

## Accounts Aedwon creates

- Shopify Partner account and one development store; a Storefront API access token
- Vercel account linked to the GitHub repository

Secrets go in `site/.env.local` (never committed) and in Vercel's environment settings.
