const peso = new Intl.NumberFormat('en-PH', {
  style: 'currency', currency: 'PHP', minimumFractionDigits: 0, maximumFractionDigits: 0,
});
export function formatPrice(value: number): string { return peso.format(value); }
