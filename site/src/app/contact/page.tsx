import { Suspense } from 'react';
import { InquiryForm } from '@/components/flow/InquiryForms';
export const metadata = { title: 'Contact the studio' };
export default function Page() { return <Suspense fallback={null}><InquiryForm kind="contact" /></Suspense>; }
