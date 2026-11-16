import { Suspense } from 'react';
import { InquiryForm } from '@/components/flow/InquiryForms';
export const metadata = { title: 'Contact the studio' };
async function Form({ searchParams }: { searchParams: Promise<{ subject?: string | string[] }> }) {
  const { subject } = await searchParams;
  return <InquiryForm kind="contact" subject={Array.isArray(subject) ? subject[0] : subject} />;
}
// The fallback is the same form, so the page does not shift when the subject arrives.
export default function Page({ searchParams }: { searchParams: Promise<{ subject?: string | string[] }> }) {
  return <Suspense fallback={<InquiryForm kind="contact" />}><Form searchParams={searchParams} /></Suspense>;
}
