import { Suspense } from 'react';
import { projects, type Project } from '@/data/projects';
import { children, find, template, serviceTemplate, projectTemplate, type Screen, type Service } from '@/lib/studioTemplates';
import { ReferencePage } from './Reference';
import { ProjectFilters } from './ProjectFilters';
const screens: Screen[] = ['desktop', 'mobile'];
export function StudioPage() { return <>{screens.map((screen) => <ReferencePage key={screen} node={template('studio', screen)} />)}</>; }
export function AboutPage() { return <>{screens.map((screen) => <ReferencePage key={screen} node={template('about', screen)} />)}</>; }
export function ServicePage({ service }: { service: Service }) { return <>{screens.map((screen) => <ReferencePage key={screen} node={serviceTemplate(service, screen)} />)}</>; }
export function ProjectPage({ project }: { project: Project }) { return <>{screens.map((screen) => <ReferencePage key={screen} node={projectTemplate(project, screen)} />)}</>; }
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
