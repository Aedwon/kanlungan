import Link from 'next/link';
import type { Availability, Product } from '@/data/products';
import { projectProductPlaceholders } from '@/data/project-product-placeholders';
import { productPlaceholders } from '@/data/product-placeholders';
import { copy } from '@/data/copy';
import { formatPrice } from '@/lib/formatPrice';
import { ImagePlaceholder } from './ImagePlaceholder';
import { NotifyMe } from './NotifyMe';
export function ProductCard({ product, number, availability = product.availability, variant = 'default' }: {
  product: Product; number?: number; availability?: Availability; variant?: 'default' | 'home' | 'project';
}) {
  const placeholder = variant === 'project' ? projectProductPlaceholders[product.slug] ?? productPlaceholders[product.slug] : productPlaceholders[product.slug];
  const made = availability === 'made-to-order';
  const sold = availability === 'sold-out';
  const unique = availability === 'one-of-a-kind';
  const fullAvailability = made
    ? copy.Shop['Made-to-order line'].replace('{n}', String(product.leadTimeWeeks))
    : copy.Shop['In-stock line'];
  return <article className={`product-card product-card-${variant} card${number ? ` k${number}` : ''}`}>
    <Link href={`/shop/products/${product.slug}`} className="product-card-link">
      <ImagePlaceholder alt={placeholder?.alt ?? product.name} className="product-card-image">
        <div className="im" style={{ background: placeholder?.background ?? 'var(--color-surface)' }} />
        {number && <span className="product-number num">{number}</span>}
        {placeholder && <span className="ph product-placeholder-caption">{placeholder.caption}</span>}
      </ImagePlaceholder>
      <div className="product-meta"><div className="product-name">{product.name}</div>
        <div className="product-price">{formatPrice(product.price)}{product.priceUnit && ` ${product.priceUnit}`}</div>
        {sold && <div className="product-sold">Sold out.</div>}
        <div className="product-detail dt">
          <div className="product-maker">{product.maker}{product.name === 'Tanghali' && ' · Paolo Sarmiento'}</div>
          {!sold && <div className="product-availability">{variant !== 'default' ? <>{made ? 'Made to order' : 'In stock'}{made && <span className="lead-time"> · {product.leadTimeWeeks} weeks</span>}</> : <><span className="availability-desktop">{unique ? 'In stock · One of a kind' : fullAvailability}</span><span className="availability-mobile">{unique ? 'One of a kind' : made ? `Made to order · ${product.leadTimeWeeks} weeks` : 'In stock'}</span></>}</div>}
        </div>
      </div>
    </Link>
    {sold && <div className="nt"><NotifyMe id={`notify-${product.slug}`} /></div>}
  </article>;
}
