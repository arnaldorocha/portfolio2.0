import { HeroSection } from '@/components/HeroSection';
import { SpecializationsSection } from '@/components/SpecializationsSection';
import { FeaturedProjects } from '@/components/FeaturedProjects';
import { ProcessFlow } from '@/components/ProcessFlow';
import { RoadmapSection } from '@/components/RoadmapSection';
import { TechStackGrid } from '@/components/TechStackGrid';
import { CurrentFocus } from '@/components/CurrentFocus';
import { ContactCTA } from '@/components/ContactCTA';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SpecializationsSection />
      <FeaturedProjects />
      <ProcessFlow />
      <RoadmapSection />
      <TechStackGrid />
      <CurrentFocus />
      <ContactCTA />
    </main>
  );
}
