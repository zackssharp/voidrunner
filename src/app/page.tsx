import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import SystemRequirements from "@/components/sections/SystemRequirements";
import DownloadSection from "@/components/sections/DownloadSection";
import FoundersPack from "@/components/sections/FoundersPack";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <SystemRequirements />
      <DownloadSection />
      <FoundersPack />
    </>
  );
}
