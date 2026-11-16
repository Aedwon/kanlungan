import { Suspense } from 'react';
import { projects } from '@/data/projects';
import { children, find, template, text, serviceTemplate, type Screen, type Service } from '@/lib/studioTemplates';
import { ReferencePage } from './Reference';
import { ProjectFilters } from './ProjectFilters';
import { ServiceCompare } from '@/components/ServiceCompare';
const screens: Screen[] = ['desktop', 'mobile'];
// The Studio landing page uses the same "Two ways to work with us" component as Home, in place of its first service section.
function StudioScreen({ screen }: { screen: Screen }) {
  const node = template('studio', screen);
  const index = node.children.findIndex((c) => typeof c !== 'string' && c.tag === 'section' && text(c).startsWith('Two ways to work with us'));
  node.children[index] = { tag: 'section', attrs: {}, children: [] };
  return <ReferencePage node={node} replace={{ [index]: <ServiceCompare variant={screen} id={`studio-services-${screen}`} hideHeading /> }} />;
}
export function StudioPage() { return <>{screens.map((screen) => <StudioScreen key={screen} screen={screen} />)}</>; }
export function AboutPage() { return <>{screens.map((screen) => <ReferencePage key={screen} node={template('about', screen)} />)}</>; }
export function ServicePage({ service }: { service: Service }) { return <>{screens.map((screen) => <ReferencePage key={screen} node={serviceTemplate(service, screen)} />)}</>; }
function ProjectList() {
  return <>{screens.map((screen) => {
    const node = template('projects', screen);
    children(find(node, 'ul')).forEach((li, index) => { li.attrs['data-project-type'] = projects[index].type.split(',')[0]; });
    return <ReferencePage key={screen} node={node} />;
  })}</>;
}
export function ProjectsPage() {
  return <Suspense fallback={<div className="projects-filter" data-filter="all"><ProjectList /></div>}><ProjectFilters><ProjectList /></ProjectFilters></Suspense>;
}
