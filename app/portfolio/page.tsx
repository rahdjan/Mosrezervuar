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
// Крупные фото (800×600+) выводим первыми — остальные мелкие превью 200×150 идут следом
// в исходном (хронологическом) порядке.
const HQ_IDS = ["gal-76", "gal-73", "gal-72", "gal-71", "gal-70", "gal-69", "gal-68", "gal-67"];

export default function PortfolioPage() {
  const featured = projects.find((p) => p.id === FEATURED_ID);
  const rest = projects.filter((p) => p.id !== FEATURED_ID);
  const hqRank = (id: string) => {
    const i = HQ_IDS.indexOf(id);
    return i === -1 ? HQ_IDS.length : i;
  };
  const orderedRest = [...rest].sort((a, b) => hqRank(a.id) - hqRank(b.id));

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
            {orderedRest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
