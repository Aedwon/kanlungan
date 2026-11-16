import { InquiryForm } from '@/components/flow/InquiryForms';
export const metadata = { title: 'Book a discovery call' };
// No search parameters, so the form is part of the prerendered page and nothing shifts when it loads.
export default function Page() { return <InquiryForm kind="booking" />; }
