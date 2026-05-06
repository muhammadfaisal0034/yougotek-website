"use client";

import { useRef } from "react";
import { MapPin, Globe } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export function GlobalFootprint() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".footprint-item",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 85%",
        }
      }
    );
  }, { scope: container });

  return (
    <section className="py-24 relative bg-slate-900 border-b border-slate-800" ref={container}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="footprint-item p-8 rounded-3xl bg-slate-800 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-4 flex items-center gap-2">
              <MapPin className="text-sky-500" />
              KSA Operations
            </h3>
            <p className="text-slate-400">
              Transforming businesses in Riyadh and across the Kingdom, aligning with Vision 2030 through cutting-edge enterprise software and automation.
            </p>
          </div>

          <div className="footprint-item p-8 rounded-3xl bg-slate-800 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-4 flex items-center gap-2">
              <MapPin className="text-sky-500" />
              Canada Operations
            </h3>
            <p className="text-slate-400">
              Driving digital growth for North American small and medium businesses, offering robust tech stacks and strategic AI deployments.
            </p>
          </div>

          <div className="footprint-item p-8 rounded-3xl bg-slate-800 border border-slate-700">
            <h3 className="text-xl font-bold text-slate-50 mb-4 flex items-center gap-2">
              <Globe className="text-sky-500" />
              Global Reach
            </h3>
            <p className="text-slate-400">
              While our core teams operate in KSA and Canada, our digital platforms and intelligent solutions are built to scale businesses globally.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
