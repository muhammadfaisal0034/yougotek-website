import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { Services } from "@/components/Services";
import { ROICalculator } from "@/components/ROICalculator";
import { GlobalFootprint } from "@/components/GlobalFootprint";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Hero />
      <AboutPreview />
      <Services />
      <ROICalculator />
      <GlobalFootprint />
      <ContactSection />
    </main>
  );
}


