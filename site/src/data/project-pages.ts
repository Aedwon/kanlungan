// Page structure for each project: the hero pair and the rooms, in the order of the house.
// Image names are frame ids exported by scripts/export-project-images.mjs. Captions come from
// docs/content/projects.md by number (1-based), so the text lives in one place (src/data/projects.ts).
export interface Frame { name: string; cap: number; caption?: string }
export interface PairSpec { before: string; after: string; cap: number; room: string; labels?: [string, string]; caption?: string; beforeCap?: number }
export type Block =
  | { kind: 'pair'; pair: PairSpec }
  | { kind: 'frames'; layout: 'two' | 'one' | 'wide'; items: Frame[] }
  | { kind: 'side'; pair: PairSpec; textCap: number }
  | { kind: 'placeholder'; label: string; caption: string };
export interface Chapter { id: string; title: string; lede?: number | string; blocks: Block[] }
export interface ProjectPageSpec { hero: { before: string; after: string; room: string }; card: string; chapters: Chapter[] }

export const projectPages: Record<string, ProjectPageSpec> = {
  'lilim-house': {
    hero: { before: 'lilim-hero-before', after: 'lilim-hero-B-layered', room: 'living room' },
    card: 'lilim-terrace',
    chapters: [
      { id: 'living', title: 'Living', lede: 1, blocks: [{ kind: 'frames', layout: 'two', items: [{ name: 'lilim-stone-table', cap: 2 }, { name: 'lilim-material-detail', cap: 3 }] }] },
      { id: 'dining', title: 'Dining', lede: 4, blocks: [
        { kind: 'pair', pair: { before: 'lilim-dining-dusk-before', after: 'lilim-dining-dusk', cap: 4, room: 'The dining area' } },
        { kind: 'frames', layout: 'one', items: [{ name: 'lilim-dining-morning', cap: 5 }] }] },
      { id: 'kitchen', title: 'Kitchen', blocks: [{ kind: 'side', pair: { before: 'lilim-kitchen-before', after: 'lilim-kitchen', cap: 6, room: 'The kitchen' }, textCap: 6 }] },
      { id: 'family', title: 'Family room', lede: 7, blocks: [{ kind: 'pair', pair: { before: 'lilim-family-room-before', after: 'lilim-family-room', cap: 7, room: 'The family room' } }] },
      { id: 'entry', title: 'Entry', lede: 8, blocks: [{ kind: 'frames', layout: 'one', items: [{ name: 'lilim-entry', cap: 8, caption: 'The bench, the console, and the front door.' }] }] },
      { id: 'bedroom', title: 'Main bedroom', lede: 9, blocks: [
        { kind: 'pair', pair: { before: 'lilim-bedroom-before', after: 'lilim-bedroom', cap: 9, room: 'The main bedroom' } },
        { kind: 'frames', layout: 'two', items: [{ name: 'lilim-bedside', cap: 10 }, { name: 'lilim-bath', cap: 11 }] }] },
      { id: 'children', title: "Children's room", lede: 12, blocks: [{ kind: 'frames', layout: 'wide', items: [{ name: 'lilim-children-room', cap: 12, caption: 'Morning light from behind the camera.' }] }] },
      { id: 'outside', title: 'Terrace and exterior', lede: 13, blocks: [{ kind: 'frames', layout: 'two', items: [{ name: 'lilim-terrace', cap: 13, caption: 'The terrace in early sun.' }, { name: 'lilim-exterior-dusk', cap: 14, caption: 'The house at dusk, with every room lit.' }] }] },
    ],
  },
  'tanaw-residence': {
    hero: { before: 'tanaw-hero-before', after: 'tanaw-hero', room: 'living room' },
    card: 'tanaw-hero',
    chapters: [
      { id: 'living', title: 'Living', lede: 1, blocks: [{ kind: 'frames', layout: 'two', items: [{ name: 'tanaw-reading-chair', cap: 2 }, { name: 'tanaw-screen-wall', cap: 3 }] }] },
      { id: 'dining', title: 'Dining and kitchen', lede: 5, blocks: [
        { kind: 'pair', pair: { before: 'tanaw-kitchen-dining-before', after: 'tanaw-kitchen-dining', cap: 5, room: 'The dining area and kitchen' } },
        { kind: 'frames', layout: 'one', items: [{ name: 'tanaw-dining-sun', cap: 4 }] }] },
      { id: 'entry', title: 'Entry', lede: 6, blocks: [{ kind: 'frames', layout: 'one', items: [{ name: 'tanaw-entry', cap: 6, caption: 'The bench, the pegs, and the front door.' }] }] },
      { id: 'study', title: 'Study', lede: 7, blocks: [
        { kind: 'pair', pair: { before: 'tanaw-study-before', after: 'tanaw-study', cap: 7, room: 'The study' } },
        { kind: 'frames', layout: 'one', items: [{ name: 'tanaw-guest-corner', cap: 8 }] }] },
      { id: 'bedroom', title: 'Main bedroom', lede: 9, blocks: [
        { kind: 'pair', pair: { before: 'tanaw-bedroom-before', after: 'tanaw-bedroom', cap: 9, room: 'The main bedroom' } },
        { kind: 'frames', layout: 'two', items: [{ name: 'tanaw-dressing-corner', cap: 10 }, { name: 'tanaw-bath', cap: 11 }] }] },
    ],
  },
  'dalampasigan-inn': {
    hero: { before: 'dalampasigan-hero-before', after: 'dalampasigan-hero', room: 'guest room' },
    card: 'dalampasigan-hero',
    chapters: [
      { id: 'rooms', title: 'Guest rooms', lede: 1, blocks: [
        { kind: 'frames', layout: 'wide', items: [{ name: 'dalampasigan-garden-room', cap: 3 }] },
        { kind: 'frames', layout: 'two', items: [{ name: 'dalampasigan-bedside', cap: 2 }, { name: 'dalampasigan-bath', cap: 4 }] }] },
      { id: 'corridor', title: 'Corridor and lobby', lede: 6, blocks: [
        { kind: 'pair', pair: { before: 'dalampasigan-lobby-before', after: 'dalampasigan-lobby', cap: 6, room: 'The lobby' } },
        { kind: 'frames', layout: 'one', items: [{ name: 'dalampasigan-corridor', cap: 5 }] }] },
      { id: 'breakfast', title: 'Breakfast room', lede: 7, blocks: [
        { kind: 'pair', pair: { before: 'dalampasigan-breakfast-before', after: 'dalampasigan-breakfast', cap: 7, room: 'The breakfast room' } },
        { kind: 'frames', layout: 'two', items: [{ name: 'dalampasigan-serving-table', cap: 8 }, { name: 'dalampasigan-common-corner', cap: 9 }] }] },
      { id: 'exterior', title: 'Exterior', lede: 10, blocks: [{ kind: 'frames', layout: 'wide', items: [{ name: 'dalampasigan-exterior', cap: 10, caption: '' }] }] },
    ],
  },
  'pahinga-villas': {
    hero: { before: 'pahinga-hero-before', after: 'pahinga-hero', room: 'villa bedroom' },
    card: 'pahinga-hero',
    chapters: [
      { id: 'bedroom', title: 'Villa bedroom', lede: 1, blocks: [
        { kind: 'frames', layout: 'wide', items: [{ name: 'pahinga-sitting-corner', cap: 3 }] },
        { kind: 'frames', layout: 'two', items: [{ name: 'pahinga-bedside', cap: 2 }, { name: 'pahinga-bath', cap: 4 }] }] },
      { id: 'terrace', title: 'Terrace', lede: 5, blocks: [
        { kind: 'pair', pair: { before: 'pahinga-terrace-before', after: 'pahinga-terrace', cap: 5, room: 'The villa terrace' } },
        { kind: 'frames', layout: 'one', items: [{ name: 'pahinga-daybed', cap: 6 }] }] },
      { id: 'grove', title: 'The grove', lede: 7, blocks: [{ kind: 'frames', layout: 'wide', items: [{ name: 'pahinga-grove', cap: 7, caption: '' }] }] },
      { id: 'reception', title: 'Reception pavilion', lede: 8, blocks: [
        { kind: 'pair', pair: { before: 'pahinga-reception-before', after: 'pahinga-reception', cap: 8, room: 'The reception pavilion' } },
        { kind: 'frames', layout: 'one', items: [{ name: 'pahinga-welcome', cap: 9 }] }] },
    ],
  },
  'hardin-apartment': {
    hero: { before: 'hardin-hero-before', after: 'hardin-hero', room: 'living room' },
    card: 'hardin-hero',
    chapters: [
      { id: 'living', title: 'Living room', lede: 1, blocks: [{ kind: 'pair', pair: { before: 'hardin-render', after: 'hardin-hero', cap: 1, beforeCap: 2, room: 'The living room', labels: ['Render', 'A year on'], caption: 'The render and the photograph, from the same camera.' } }] },
      { id: 'book', title: 'Design book', blocks: [
        { kind: 'frames', layout: 'two', items: [{ name: 'hardin-book', cap: 3 }, { name: 'hardin-moodboard', cap: 4 }] },
        { kind: 'placeholder', label: 'Floor plan', caption: 'The 74 sqm unit, with furniture placed.' }] },
      { id: 'dining', title: 'Dining and entry', blocks: [
        { kind: 'frames', layout: 'wide', items: [{ name: 'hardin-dining', cap: 6 }] },
        { kind: 'frames', layout: 'one', items: [{ name: 'hardin-entry', cap: 7 }] }] },
      { id: 'kitchen', title: 'Kitchen and bath', blocks: [{ kind: 'frames', layout: 'two', items: [{ name: 'hardin-kitchen', cap: 8 }, { name: 'hardin-bath', cap: 10 }] }] },
      { id: 'bedroom', title: 'Bedroom', lede: 9, blocks: [{ kind: 'pair', pair: { before: 'hardin-bedroom-before', after: 'hardin-bedroom', cap: 9, room: 'The bedroom' } }] },
      { id: 'balcony', title: 'Balcony', lede: 11, blocks: [
        { kind: 'pair', pair: { before: 'hardin-balcony-before', after: 'hardin-balcony', cap: 11, room: 'The balcony' } },
        { kind: 'frames', layout: 'one', items: [{ name: 'hardin-herbs', cap: 12 }] }] },
    ],
  },
};
