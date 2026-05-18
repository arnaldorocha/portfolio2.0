import { HeroSection } from '@/components/HeroSection';
import { BentoGrid } from '@/components/BentoGrid';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { TechStackGrid } from '@/components/TechStackGrid';
import { TimelineSection } from '@/components/TimelineSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <BentoGrid />
      <ProjectCarousel />
      <TechStackGrid />
      <TimelineSection />
    </>
  );
}
