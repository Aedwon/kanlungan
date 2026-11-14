'use client';
import { useState } from 'react';
import { Button } from './Button';
// Foundation only. The explicit fictional-brand notice applies; no address is transmitted.
export function MailingList({ label, button }: { label: string; button: string }) {
  const [submitted, setSubmitted] = useState(false);
  return <form className="mailing-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
    <label htmlFor="mailing-email">{label}</label>
    <input id="mailing-email" type="email" name="email" autoComplete="email" required readOnly={submitted} />
    <Button variant="light" type="submit" disabled={submitted}>{button}{submitted && <span aria-hidden="true"> ✓</span>}</Button>
  </form>;
}
