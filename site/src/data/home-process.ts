// Home: process steps. Copy from docs/content/copy.md ("Home: process steps").
export const processHeading = 'How a furnishing project works';
export const processLine = 'Most homes take 12 to 20 weeks, from the first call to the last cushion.';
export const processSteps = [
  { name: 'Discovery call', week: 'Week 0', text: 'A free 30-minute call about your space, your brief, and your budget.', photo: 'process-call', alt: 'An open notebook, a coffee cup and a phone on a wood desk, with printed photos of an empty room' },
  { name: 'Site visit', week: 'Week 1', text: 'We measure every room. You get a fixed design fee and a budget range.', photo: 'process-site-visit', alt: 'A tape measure stretched across the floor of an empty room, with a clipboard and a laser measure' },
  { name: 'Design', week: 'Weeks 2 to 6', text: 'Layouts, materials, and a furnishing plan, with two rounds of revisions.', photo: 'process-design', alt: 'Cane, linen, marble and wood samples beside a floor plan and a pencil on a wood table' },
  { name: 'Making', week: 'Weeks 7 to 16', text: 'Workshops build each piece by hand. We send photos as they go.', photo: 'maker-sulihiya', alt: 'A rattan chair back being hand-woven with cane in a workshop' },
  { name: 'Installation', week: 'Weeks 17 to 18', text: 'Our crew delivers and places everything, usually in under a week on site.', photo: 'process-install', alt: 'A room on install day: a lamp in its box, a sofa under a moving blanket, a rolled rug and a drill' },
  { name: 'Handover', week: '', text: 'We style each room, walk you through it, and leave a care guide. We come back after 30 days.', photo: 'process-handover', alt: 'A stoneware vase with a green sprig, a care guide and house keys on a wood table in a finished living room' },
] as const;
