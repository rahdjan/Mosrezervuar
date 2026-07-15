import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Реализованные проекты МосРезервуар: резервуары РВС и РГСН, дымовые трубы, силосы для асфальтобетонных заводов и металлоконструкции.",
};

const FEATURED_ID = "gal-75";

export default function PortfolioPage() {
  const featured = projects.find((p) => p.id === FEATURED_ID);
  const rest = projects.filter((p) => p.id !== FEATURED_ID);

  return (
    <>
      <PageHeader
        eyebrow="Портфолио"
        title="Реализованные проекты"
        description="Резервуары, дымовые трубы, силосы и металлоконструкции, изготовленные и смонтированные нашей командой для промышленных предприятий."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured && <ProjectCard key={featured.id} project={featured} featured />}
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
