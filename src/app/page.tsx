import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Featured from "@/components/sections/Featured";
import CoursesGrid from "@/components/sections/CoursesGrid";
import LearningPaths from "@/components/sections/LearningPaths";
import Growth from "@/components/sections/Growth";
import CreatorCta from "@/components/sections/CreatorCta";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Featured />
      <CoursesGrid />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
