import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Портфолио",
  description:
    "Реализованные проекты МосРезервуар: резервуары РВС и РГСН, дымовые трубы, силосы для асфальтобетонных заводов и металлоконструкции.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Портфолио"
        title="Реализованные проекты"
        description="Резервуары, дымовые трубы, силосы и металлоконструкции, изготовленные и смонтированные нашей командой для промышленных предприятий и государственных заказчиков."
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 lg:py-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
