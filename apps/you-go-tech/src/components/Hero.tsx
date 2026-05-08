"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-50/20" />,
});

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [showScene, setShowScene] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Check if we should show the scene (Desktop only for performance)
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const idleId = requestIdleCallback(() => setShowScene(true), { timeout: 4000 });
    return () => cancelIdleCallback(idleId);
  }, []);

  useGSAP(() => {
    // Run animations after a short delay
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-badge",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
      .fromTo(".hero-desc",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(".hero-cta",
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1 },
        "-=0.3"
      )
      .fromTo(".hero-stats",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        "-=0.2"
      );
    }, 100);

    return () => clearTimeout(timer);
  }, { scope: container });

  return (
    <section id="hero" ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      
      {/* Decorative blobs - reduced complexity for mobile */}
      <div className="blob-primary pointer-events-none w-[500px] h-[500px] -top-20 -right-20 opacity-60 sm:opacity-70" />
      <div className="blob-secondary pointer-events-none w-[400px] h-[400px] bottom-0 -left-20 opacity-40 sm:opacity-50" />

      {/* 3D Background - ONLY ON DESKTOP */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        {showScene && <ThreeScene />}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.7)_85%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center pt-24 pb-20">
        
        {/* Badge */}
        <div className="hero-badge section-label mb-8 mx-auto opacity-0">
          <Sparkles className="h-3.5 w-3.5" />
          Engineering the Age of AI
        </div>

        {/* LCP Element — Solid color initially for instant LCP, gradient after hydration */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] mb-8 text-slate-900">
          We Engineer <span className={isClient ? "text-gradient" : "text-[#0284c7]"}>Autonomous</span>
          <br />
          AI-First Systems
        </h1>

        <p className="hero-desc text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10 opacity-0" style={{ color: "var(--text-secondary)" }}>
          High-performance digital products built with AI-assisted speed and precision. We eliminate traditional engineering bottlenecks to deliver extraordinary results at scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#contact" className="hero-cta btn-primary text-base px-8 py-4 opacity-0">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="hero-cta btn-secondary text-base px-8 py-4 opacity-0">
            Explore Services
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          <div className="hero-stats text-center opacity-0">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>50+</div>
            <div className="text-sm mt-1 font-medium" style={{ color: "var(--text-muted)" }}>Clients</div>
          </div>
          <div className="hero-stats text-center opacity-0">
            <div className="text-3xl sm:text-4xl font-bold text-[#0284c7]" style={{ fontFamily: "var(--font-heading)" }}>99%</div>
            <div className="text-sm mt-1 font-medium" style={{ color: "var(--text-muted)" }}>Success</div>
          </div>
          <div className="hero-stats text-center opacity-0">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>10x</div>
            <div className="text-sm mt-1 font-medium" style={{ color: "var(--text-muted)" }}>Speed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
