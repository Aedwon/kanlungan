import Link from 'next/link';
import { Button } from '@/components/Button';
import { Photo, photoSize } from '@/components/Photo';
import { BeforeAfter } from '@/components/BeforeAfter';
import { RoomIndex } from '@/components/RoomIndex';
import { ScrollWipe } from '@/components/ScrollWipe';
import { HardinPlan } from './HardinPlan';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';
import { projects, type Project } from '@/data/projects';
import { products } from '@/data/products';
import { projectPages, type Block, type Frame, type PairSpec } from '@/data/project-pages';
import { serviceHref } from '@/lib/studioTemplates';
import { formatPrice } from '@/lib/formatPrice';
import { copy } from '@/data/copy';
import { productStudioName } from '@/data/image-slots';
import swatches from '@/data/swatches.json';

const split = (value: string) => { const i = value.indexOf('. '); return i < 0 ? { label: '', text: value } : { label: value.slice(0, i), text: value.slice(i + 2) }; };
const ratio = (name: string) => { const { width, height } = photoSize(name); return { ['--ar' as string]: `${width} / ${height}`, ['--arm' as string]: width / height > 1.5 ? '4 / 3' : `${width} / ${height}` }; };

function Frames({ project, layout, items }: { project: Project; layout: 'two' | 'one' | 'wide'; items: Frame[] }) {
  return <div className={`frs ${layout}`}>{items.map((item) => {
    const full = project.galleryCaptions[item.cap - 1];
    const caption = item.caption ?? split(full).text;
    return <figure className="fr" key={item.name}>
      <div className="im" style={ratio(item.name)}><Photo name={item.name} alt={full} sizes={layout === 'wide' ? '(min-width: 1280px) 1000px, 100vw' : '(min-width: 1280px) 500px, 100vw'} /></div>
      {caption && <figcaption className="t-small">{caption}</figcaption>}
    </figure>;
  })}</div>;
}
function Pair({ project, pair }: { project: Project; pair: PairSpec }) {
  const after = project.galleryCaptions[pair.cap - 1];
  const before = pair.beforeCap ? project.galleryCaptions[pair.beforeCap - 1] : `${pair.room} as handed over.`;
  const portrait = photoSize(pair.after).ratio < 1;
  return <figure className={`pr${portrait ? ' tall' : ''}`}>
    <BeforeAfter before={pair.before} after={pair.after} beforeAlt={before} afterAlt={after} label={`${pair.room}, before and after`}
      beforeLabel={pair.labels?.[0]} afterLabel={pair.labels?.[1]} />
    <figcaption className="t-small">{pair.caption ?? 'Before and after, from the same camera.'}</figcaption>
  </figure>;
}
function ChapterBlock({ project, block }: { project: Project; block: Block }) {
  if (block.kind === 'frames') return <Frames project={project} layout={block.layout} items={block.items} />;
  if (block.kind === 'pair') return <div className="pbox"><Pair project={project} pair={block.pair} /></div>;
  if (block.kind === 'side') return <div className="side"><div className="sd-a"><Pair project={project} pair={block.pair} /></div><p className="t-h3 sd-b">{split(project.galleryCaptions[block.textCap - 1]).text}</p></div>;
  if (block.label === 'Floor plan' && project.slug === 'hardin-apartment') return <HardinPlan />;
  return <figure className="fr ph-fr"><ImagePlaceholder alt={`${block.label}, image to come`} className="im ph-im" style={{ ['--ar' as string]: '4 / 3' }}><span className="t-small">{block.label}</span></ImagePlaceholder><figcaption className="t-small">{block.caption}</figcaption></figure>;
}
function shopItems(project: Project) {
  return project.shopTheProject.map((entry) => {
    const m = entry.match(/^(.*?)(?: \((.*)\))?$/)!;
    const product = products.find((p) => p.name === m[1]);
    const variant = m[2] ? m[2][0].toUpperCase() + m[2].slice(1) : undefined;
    return { name: m[1], variant, product };
  });
}
const swatchList = (slug: string) => (swatches as Record<string, { material: string; id: string }[]>)[slug];
const swatchColumns = (count: number) => (count <= 7 ? count : 5);
export function ProjectDetail({ project }: { project: Project }) {
  const spec = projectPages[project.slug];
  const heroAlt = split(project.galleryCaptions[0]);
  const heroLine = project.brief.split(/(?<=\.)\s/)[0];
  const facts: [string, string][] = [['Location', project.location], ['Type', project.type], ['Floor area', project.floorArea], ['Year', String(project.year)], ['Scope', project.scope]];
  const next = projects[(projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length];
  const nextSpec = projectPages[next.slug];
  const [approachFirst, ...approachRest] = project.approachExpanded.split('\n\n');
  return <div className="pj">
    <ScrollWipe />
    <section className="wipe-track hero" data-wipe role="group" aria-label={`${project.name} ${spec.hero.room}, before and after, revealed as you scroll`}>
      <div className="wipe-pin" data-wipe-pin>
        <div className="wipe-frame">
          <div className="wipe-l before"><Photo name={spec.hero.before} alt={`The ${project.name} ${spec.hero.room} as handed over.`} priority /><span className="chip l">Before</span></div>
          <div className="wipe-l after"><Photo name={spec.hero.after} alt={heroAlt.text} /><span className="chip r">After</span></div>
          <div className="scrim" />
        </div>
        <div className="hero-copy"><h1>{project.name}</h1><p className="t-body">{heroLine}</p></div>
      </div>
    </section>
    <section className="facts" aria-label="Project facts"><dl className="t-body">
      {facts.slice(0, 3).map(([k, v]) => <div key={k}><dt className="t-label">{k}</dt><dd>{v}</dd></div>)}
      <div><dt className="t-label">Service</dt><dd><Link href={serviceHref(project.service)} className="lnk">{project.service} <span className="arr" aria-hidden="true">→</span></Link></dd></div>
      {facts.slice(3).map(([k, v]) => <div key={k}><dt className="t-label">{k}</dt><dd>{v}</dd></div>)}
      <div className="wide"><dt className="t-label">Duration</dt><dd>{project.duration}</dd></div>
    </dl></section>
    <section className="sec" aria-label="Brief and approach"><div className="g">
      <div className="c-l txt"><h2 className="t-h1">Client brief</h2><p>{project.brief}</p><h3 className="t-h4 handed">As handed over</h3><p className="muted">{project.asHandedOver}</p></div>
      <div className="c-r txt"><h2 className="t-h1">Our approach</h2><p>{approachFirst}</p>{approachRest.map((p, i) => <p key={i}>{p}</p>)}</div>
    </div></section>
    <section className="sec" aria-labelledby="mv"><div className="g blk"><h2 className="t-h2" id="mv">The plan</h2>
      <ol className="moves">{project.moves.map((m, i) => <li key={i}><span className="t-h4 n">{i + 1}</span><h3 className="t-h4">{m.title}</h3>{m.text && <p className="t-body">{m.text}</p>}</li>)}</ol>
    </div></section>
    <div className="sec"><div className="chw">
      <RoomIndex rooms={spec.chapters.map((c) => ({ id: c.id, title: c.title }))} />
      <div className="chs">{spec.chapters.map((chapter) => {
        const lede = typeof chapter.lede === 'number' ? split(project.galleryCaptions[chapter.lede - 1]).text : chapter.lede;
        return <section className="ch" id={chapter.id} key={chapter.id} aria-labelledby={`h-${chapter.id}`}>
          <h2 className="t-h1" id={`h-${chapter.id}`}>{chapter.title}</h2>
          {lede && <p className="t-body lede">{lede}</p>}
          {chapter.blocks.map((block, i) => <ChapterBlock key={i} project={project} block={block} />)}
        </section>;
      })}</div>
    </div></div>
    <section className="sec" aria-labelledby="mat"><div className="g blk"><h2 className="t-h1" id="mat">Materials</h2>
      <ul className="mat" style={{ ['--n' as string]: swatchColumns(swatchList(project.slug).length) }}>{swatchList(project.slug).map(({ material, id }) => {
        const base = `/images/swatches/${project.slug}/${id}`;
        return <li key={id}>
          <picture><source type="image/webp" srcSet={`${base}-200.webp 200w, ${base}-400.webp 400w`} sizes="(min-width: 1280px) 170px, 45vw" />
            <img className="sw" src={`${base}-400.jpg`} srcSet={`${base}-200.jpg 200w, ${base}-400.jpg 400w`} sizes="(min-width: 1280px) 170px, 45vw" alt="" width={400} height={400} loading="lazy" decoding="async" /></picture>
          <span className="t-title">{material[0].toUpperCase() + material.slice(1)}</span></li>;
      })}</ul>
    </div></section>
    <section className="sec" aria-labelledby="shop"><div className="g blk"><div className="shop-top"><h2 className="t-h1" id="shop">Shop the project</h2><Link href="/shop" className="lnk t-ui">View all in the shop <span className="arr" aria-hidden="true">→</span></Link></div>
      <ul className="shop">{shopItems(project).map((item) => {
        const { product } = item; const photo = product && productStudioName(product.slug);
        const row = <>{photo ? <Photo name={photo} alt="" className="th" sizes="96px" /> : <span className="th" aria-hidden="true" />}
          <span className="rt"><span className="rn t-title">{item.name}{item.variant && <span className="v t-small">{item.variant}</span>}</span>
            {product && <span className="rm t-small">{product.maker} · {formatPrice(product.price)}{product.priceUnit && ` ${product.priceUnit}`}</span>}</span></>;
        return <li key={item.name + item.variant}>{product ? <Link href={`/shop/products/${product.slug}`}>{row}</Link> : <span className="nolink">{row}</span>}</li>;
      })}</ul>
    </div></section>
    <section className="sec" aria-labelledby="nx"><div className="g blk"><h2 className="t-h2" id="nx">Next project</h2>
      <Link href={`/projects/${next.slug}`} className="next">
        <span className="im"><Photo name={nextSpec.card} alt={`${next.name}, ${next.location}`} sizes="(min-width: 1280px) 1312px, 100vw" /></span>
        <span className="next-t"><span className="t-h3 it">{next.name}</span><span className="t-small muted">{next.location}</span></span>
      </Link></div></section>
    <section className="sec end" aria-labelledby="cl"><div className="g blk cl"><h2 className="t-h2" id="cl">Tell us about your space.</h2>
      <p className="t-body muted">{copy.Home["Closing text"]}</p>
      <Button href="/book">Book a discovery call</Button></div></section>
  </div>;
}
