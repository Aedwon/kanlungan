import { Suspense } from 'react';
import { InquiryForm } from '@/components/flow/InquiryForms';
export const metadata = { title: 'Book a discovery call' };
export default function Page() { return <Suspense fallback={null}><InquiryForm kind="booking" /></Suspense>; }
