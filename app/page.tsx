import { CatalogPreview } from "@/components/sections/CatalogPreview";
import { ContactCta } from "@/components/sections/ContactCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { LatestProjects } from "@/components/sections/LatestProjects";
import { SteelStrip } from "@/components/sections/SteelStrip";
import { WhyUs } from "@/components/sections/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SteelStrip />
      <WhyUs />
      <CatalogPreview />
      <LatestProjects />
      <ContactCta />
    </>
  );
}
