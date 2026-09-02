import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SystemRequirements from "@/components/sections/SystemRequirements";
import DownloadSection from "@/components/sections/DownloadSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <SystemRequirements />
      <DownloadSection />
    </>
  );
}
