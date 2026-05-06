"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";

const ThreeScene = dynamic(() => import("./ThreeScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-50" />,
});

export function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = requestIdleCallback(() => setShowScene(true), { timeout: 3000 });
      return () => cancelIdleCallback(id);
    } else {
      const timer = setTimeout(() => setShowScene(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".hero-badge",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.1 }
    )
    .fromTo(".hero-desc",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(".hero-cta",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.3"
    )
    .fromTo(".hero-stats",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
      "-=0.2"
    );
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      
      {/* Decorative blobs */}
      <div className="blob-primary pointer-events-none w-[600px] h-[600px] -top-40 -right-40" />
      <div className="blob-secondary pointer-events-none w-[500px] h-[500px] bottom-0 -left-40" />

      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        {showScene && <ThreeScene />}
      </div>

      {/* Overlay - subtle light gradient */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.8)_80%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center pt-32 pb-20" style={{ minHeight: "500px" }}>
        
        {/* Badge */}
        <div className="hero-badge section-label mb-8 mx-auto">
          <Sparkles className="h-3.5 w-3.5" />
          AI-Powered Digital Agency
        </div>

        {/* LCP Element — always visible */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-slate-900">
          We Build <span className="text-gradient">Intelligent</span>
          <br />
          Digital Systems
        </h1>

        <p className="hero-desc text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: "var(--text-secondary)" }}>
          Enterprise web platforms and autonomous AI integrations that transform how your business operates. From KSA to Canada, we scale globally.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a href="#contact" className="hero-cta btn-primary text-base px-8 py-4">
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#services" className="hero-cta btn-secondary text-base px-8 py-4">
            Explore Services
          </a>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          <div className="hero-stats text-center">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>50+</div>
            <div className="text-sm mt-1 font-medium" style={{ color: "var(--text-muted)" }}>Enterprise Clients</div>
          </div>
          <div className="hero-stats text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#0284c7]" style={{ fontFamily: "var(--font-heading)" }}>99%</div>
            <div className="text-sm mt-1 font-medium" style={{ color: "var(--text-muted)" }}>Client Retention</div>
          </div>
          <div className="hero-stats text-center">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>10x</div>
            <div className="text-sm mt-1 font-medium" style={{ color: "var(--text-muted)" }}>Productivity Boost</div>
          </div>
          <div className="hero-stats text-center">
            <div className="text-3xl sm:text-4xl font-bold text-slate-900" style={{ fontFamily: "var(--font-heading)" }}>24/7</div>
            <div className="text-sm mt-1 font-medium" style={{ color: "var(--text-muted)" }}>AI Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}
