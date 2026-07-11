import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getFeaturedProjects } from "@/lib/data/projects";

export function LatestProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="bg-section">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-ink sm:text-5xl">
            Реализованные проекты
          </h2>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-rust transition-colors hover:text-rust-light"
          >
            Всё портфолио
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
