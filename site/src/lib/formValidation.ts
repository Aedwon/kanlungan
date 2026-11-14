export type Values = Record<string, string>;
export const bookingErrors: Values = {
  name: 'Enter your full name.', email: 'Enter an email address such as name@example.com.', mobile: 'Enter a mobile number we can reach, such as 09XX XXX XXXX.', service: 'Choose a service, or choose Not sure yet.', property: 'Choose a property type.', location: 'Enter the city or province of the space.', area: 'Enter a number in sqm.', budget: 'Choose a budget range, or choose Not sure yet.',
};
export const emailValid = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const mobileValid = (v: string) => /^(?:09\d{9}|\+639\d{9})$/.test(v.replace(/[\s()-]/g, ''));
export function validateBooking(v: Values) {
  const errors: Values = {};
  for (const name of ['name', 'email', 'mobile', 'service', 'property', 'location', 'budget']) if (!v[name]?.trim()) errors[name] = bookingErrors[name];
  if (!emailValid(v.email ?? '')) errors.email = bookingErrors.email;
  if (!mobileValid(v.mobile ?? '')) errors.mobile = bookingErrors.mobile;
  if (v.area?.trim() && (!/^\d+(?:\.\d+)?$/.test(v.area.trim()) || Number(v.area) <= 0)) errors.area = bookingErrors.area;
  return errors;
}
export function validateContact(v: Values) {
  const errors: Values = {};
  if (!v.name?.trim()) errors.name = bookingErrors.name;
  if (!emailValid(v.email ?? '')) errors.email = bookingErrors.email;
  for (const name of ['subject', 'message']) if (!v[name]?.trim()) errors[name] = `Enter a ${name}.`;
  return errors;
}
export function validateCheckout(v: Values, now = new Date()) {
  const errors: Values = {};
  if (!emailValid(v.email ?? '')) errors.email = bookingErrors.email;
  if (!mobileValid(v.mobile ?? '')) errors.mobile = bookingErrors.mobile;
  for (const [name, label] of Object.entries({ fullname: 'full name', address: 'street address', barangay: 'barangay', city: 'city', region: 'region' })) if (!v[name]?.trim()) errors[name] = `Enter your ${label}.`;
  if (!/^\d{4}$/.test(v.postal ?? '')) errors.postal = 'Enter a four-digit postal code.';
  if (v.pay === 'card') {
    if (!/^\d{13,19}$/.test((v.cardnumber ?? '').replace(/\s/g, ''))) errors.cardnumber = 'Enter a card number with 13 to 19 digits.';
    if (!v.cardname?.trim()) errors.cardname = 'Enter the name on the card.';
    const expiry = /^(0[1-9]|1[0-2])\s*\/\s*(\d{2})$/.exec(v.cardexp ?? '');
    if (!expiry || new Date(2000 + Number(expiry[2]), Number(expiry[1]), 1) <= now) errors.cardexp = 'Enter a future expiry date as MM / YY.';
    if (!/^\d{3,4}$/.test(v.cardcvc ?? '')) errors.cardcvc = 'Enter a security code with 3 or 4 digits.';
  }
  return errors;
}
