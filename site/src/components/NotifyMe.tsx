'use client';
import { useId, useState } from 'react';
import { copy } from '@/data/copy';
import { Button } from './Button';
export function NotifyMe({ id: idPrefix }: { id: string }) {
  const id = `${idPrefix}-${useId().replace(/:/g, '')}`;
  const [submitted, setSubmitted] = useState(false);
  const text = copy['Search, 404, contact, and notify me'];
  return <form className="notify-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
    <label htmlFor={id}>{text['Notify me field label']}</label>
    <input id={id} type="email" name="email" autoComplete="email" required readOnly={submitted} />
    <Button type="submit" variant="outline" disabled={submitted}>{text['Notify me button']}</Button>
    {submitted && <p role="status">{text['Notify me confirmation']}</p>}
  </form>;
}
