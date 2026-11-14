import { copy } from '@/data/copy';
import { TextLink } from '@/components/TextLink';
export default function NotFound() {
  const text = copy['Search, 404, contact, and notify me'];
  return <div className="stub"><h1>{text['404 heading']}</h1><p>{text['404 text']}</p><TextLink href="/">Home</TextLink></div>;
}
