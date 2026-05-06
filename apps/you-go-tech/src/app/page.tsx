import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { Services } from "@/components/Services";
import { ROICalculator } from "@/components/ROICalculator";
import { GlobalFootprint } from "@/components/GlobalFootprint";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AboutPreview />
      <Services />
      <ROICalculator />
      <GlobalFootprint />
      <ContactSection />
      <Footer />
    </main>
  );
}
