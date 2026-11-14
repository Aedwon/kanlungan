'use client';
import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { flowTemplate, nodes, type Screen } from '@/lib/flowTemplates';
import { validateBooking, validateContact, type Values } from '@/lib/formValidation';
import { FlowReference, focusConfirmation, focusErrors } from './FlowReference';
export function InquiryForm({ kind }: { kind: 'booking' | 'contact' }) {
  const params = useSearchParams();
  const [values, setValues] = useState<Values>({ subject: kind === 'contact' ? params.get('subject') ?? '' : '' });
  const [errors, setErrors] = useState<Values>({}); const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const next = kind === 'booking' ? validateBooking(values) : validateContact(values); setErrors(next);
    if (Object.keys(next).length) { focusErrors(event.currentTarget); return; }
    setValues({}); setSubmitted(true); focusConfirmation();
  }
  if (submitted && kind === 'contact') return <div className="flow-page contact-confirmation"><h1>Thank you. We have your details.</h1><p>We reply within two business days.</p></div>;
  return <>{(kind === 'booking' ? ['desktop', 'mobile'] : ['desktop']).map((screen) => {
    const root = flowTemplate(submitted ? 'booking-submitted' : kind, screen as Screen);
    if (kind === 'contact') root.attrs.className += ' contact-responsive';
    // No preselected radio rings from the illustrative form.
    for (const n of nodes(root)) if (n.tag === 'label' && (n.attrs.style as Record<string, string>)?.outline) { const s = n.attrs.style as Record<string, string>; delete s.outline; delete s.outlineOffset; }
    return <FlowReference key={screen} node={root} screen={kind === 'contact' ? 'contact-desktop' : screen} form={{ values, errors, change: (name, value) => setValues((v) => ({ ...v, [name]: value })), submit }} />;
  })}</>;
}
