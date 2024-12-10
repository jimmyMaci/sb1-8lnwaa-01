import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { NewsSection } from "@/components/news-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <NewsSection />
    </div>
  );
}