"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { ArrowRight, Globe } from "lucide-react";

const ThreeScene = dynamic(() => import("./ThreeScene"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-900" />
});

export function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".hero-eyebrow",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    )
    .fromTo(".hero-title-line",
      { y: 100, opacity: 0, rotationX: -20 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.15, ease: "power4.out" },
      "-=0.4"
    )
    .fromTo(".hero-desc",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.6"
    )
    .fromTo(".hero-cta",
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.4"
    );

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(".hero-text-container", {
        x: xPos * 0.5,
        y: yPos * 0.5,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-slate-900">
      
      {/* 3D WebGL Background — wrapped in pointer-events-none so it never blocks UI */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeScene />
      </div>

      {/* Radial overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.6)_0%,rgba(15,23,42,0.95)_100%)] pointer-events-none" />

      {/* All text + CTAs — z-20 so they sit above canvas + overlay */}
      <div className="hero-text-container relative z-20 mx-auto max-w-6xl px-6 text-center mt-12">
        <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-800/80 px-4 py-1.5 text-sm font-semibold tracking-widest text-sky-400 shadow-sm backdrop-blur-md mb-8">
          <Globe className="h-4 w-4" />
          You Go Tech — AI Agency
        </div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-50" style={{ perspective: "1000px" }}>
          <div className="overflow-hidden pb-2">
            <div className="hero-title-line">Digital Infrastructure.</div>
          </div>
          <div className="overflow-hidden pb-2">
            <div className="hero-title-line">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">Autonomous Growth.</span>
            </div>
          </div>
        </h1>
        
        <p className="hero-desc mt-8 text-lg sm:text-xl leading-relaxed text-slate-400 max-w-3xl mx-auto">
          We engineer high-performance web platforms and deploy intelligent AI systems. See how we scale your business.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* "Start Your Deployment" → scrolls to #contact */}
          <a
            href="#contact"
            className="hero-cta group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-sky-500 px-8 py-5 text-lg font-bold text-white shadow-xl shadow-sky-500/20 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start Your Deployment</span>
            <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          {/* "View Capabilities" → scrolls to #services */}
          <a
            href="#services"
            className="hero-cta group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-8 py-5 text-lg font-bold text-slate-300 hover:bg-slate-800 transition-colors duration-300 backdrop-blur-md"
          >
            View Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
