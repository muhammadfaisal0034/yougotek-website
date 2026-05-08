"use client";

import { useRef } from "react";
import { MapPin, Globe } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export function GlobalFootprint() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(".footprint-item",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: container.current, start: "top 80%" }
        }
      );
    }, 100);
    return () => clearTimeout(timer);
  }, { scope: container });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--bg-primary)" }} ref={container}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="blob-secondary pointer-events-none w-[400px] h-[400px] top-10 -left-20" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="section-label mb-6 mx-auto">
            <Globe className="h-3.5 w-3.5" />
            Our Presence
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Operating <span className="text-gradient">Globally</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="footprint-item glass-card rounded-2xl p-8 group relative overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[rgba(2,132,199,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="p-3 rounded-xl bg-sky-50 text-[#0284c7] border border-sky-100 w-fit mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0284c7] transition-colors">KSA Operations</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Transforming businesses in Riyadh and across the Kingdom, aligning with Vision 2030 through autonomous systems and high-speed AI engineering.
              </p>
            </div>
          </div>

          <div className="footprint-item glass-card rounded-2xl p-8 group relative overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[rgba(79,70,229,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 w-fit mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Canada Operations</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Driving AI-assisted scaling for North American enterprises, offering high-precision engineering and strategic autonomous deployments.
              </p>
            </div>
          </div>

          <div className="footprint-item glass-card rounded-2xl p-8 group relative overflow-hidden bg-white">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[rgba(2,132,199,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="p-3 rounded-xl bg-sky-50 text-[#0284c7] border border-sky-100 w-fit mb-6">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0284c7] transition-colors">Global Reach</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                While our core teams operate in KSA and Canada, our digital platforms and intelligent solutions are built to scale businesses globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
