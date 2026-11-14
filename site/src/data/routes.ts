import { products } from './products';
import { collections } from './collections';
import { projects } from './projects';
import { makers } from './makers';
import { categories } from './navigation';
import { copy } from './copy';
export const routes: Record<string,string> = {
  '/studio': 'Studio',
  '/studio/full-service-furnishing': 'Full-Service Furnishing',
  '/studio/interior-design-direction': 'Interior Design Direction',
  '/projects': copy.Home['Featured projects heading'],
  '/shop': copy.Shop['Shop landing heading'],
  '/shop/collections': 'Collections',
  '/shop/makers': 'Makers',
  '/about': copy.About.Heading,
  '/book': copy.Booking.Heading,
  '/contact': copy['Search, 404, contact, and notify me']['Contact heading'],
  '/cart': copy['Cart, checkout, and confirmation']['Cart / Cart page title'],
  '/checkout': 'Checkout',
  '/checkout/confirmation': copy['Cart, checkout, and confirmation']['Order confirmation / Heading'],
  '/search': 'Search',
  '/help': 'Help',
  '/help/delivery-and-returns': copy.Help['Delivery and returns / Heading'],
  '/help/care-guide': copy.Help['Care guide / Heading'],
  '/help/faq': copy.Help['FAQ / Heading'],
  '/legal': 'Legal',
  '/legal/privacy': 'Privacy',
  '/legal/terms': 'Terms',
  '/404': copy['Search, 404, contact, and notify me']['404 heading'],
  ...Object.fromEntries(categories.map((category) => [category.href, category.name])),
  ...Object.fromEntries(products.map((product) => [`/shop/products/${product.slug}`,product.name])),
  ...Object.fromEntries(collections.map((collection) => [`/shop/collections/${collection.slug}`,collection.name])),
  ...Object.fromEntries(projects.map((project) => [`/projects/${project.slug}`,project.name])),
  ...Object.fromEntries(makers.map((maker) => [`/shop/makers/${maker.slug}`,maker.name])),
};
