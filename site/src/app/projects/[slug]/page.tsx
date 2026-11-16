import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { ProjectDetail } from '@/components/project/ProjectDetail';
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  return { title: project?.name, description: project?.brief };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
