import { slotPhoto } from '@/data/image-slots';
import { PhotoSlot } from './Photo';

// A slot that was a placeholder: renders the approved photograph mapped to its label, with updated alt text.
export function RoomPhoto({ label, className, sizes }: { label: string; className?: string; sizes?: string }) {
  const photo = slotPhoto(label);
  if (!photo) throw new Error(`No photograph mapped for slot: ${label}`);
  return <PhotoSlot name={photo.name} alt={photo.alt} position={photo.position} className={className} sizes={sizes} />;
}
