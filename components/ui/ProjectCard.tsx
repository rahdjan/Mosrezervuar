import { ProductIllustration } from "@/components/illustrations";
import { categories } from "@/lib/data/categories";
import type { Project } from "@/lib/data/projects";
import { getProjectImageUrl } from "@/lib/images";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const category = categories.find((c) => c.id === project.category);
  const meta = [project.client, project.year].filter(Boolean).join(" · ");

  return (
    <article className="group flex flex-col overflow-hidden border border-line border-t-[3px] border-t-transparent bg-white transition-all hover:border-t-rust hover:shadow-lg">
      <div className="relative">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getProjectImageUrl(project.image)}
            alt={project.title}
            loading="lazy"
            className="aspect-[4/3] w-full border-b border-line object-cover"
          />
        ) : (
          <ProductIllustration
            icon={category?.icon ?? "steel"}
            className="aspect-[4/3] w-full border-b border-line"
            dark
          />
        )}
        <span className="absolute left-0 top-0 bg-rust px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-white">
          {project.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-xl font-bold uppercase leading-tight text-ink">
          {project.title}
        </h3>
        {meta && (
          <p className="font-mono text-xs uppercase tracking-widest text-graphite">{meta}</p>
        )}
        <p className="mt-1 text-sm leading-relaxed text-graphite">{project.description}</p>
      </div>
    </article>
  );
}
