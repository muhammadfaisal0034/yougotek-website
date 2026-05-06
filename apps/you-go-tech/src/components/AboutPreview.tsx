"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Users, Target, Zap } from "lucide-react";

export function AboutPreview() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".about-content",
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: container.current, start: "top 75%" }
      }
    );
  }, { scope: container });

  return (
    <section id="about" className="relative py-24 lg:py-32" style={{ background: "var(--bg-primary)" }} ref={container}>
      <div className="blob-green w-[400px] h-[400px] top-20 -right-20" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left column — text */}
          <div className="about-content">
            <div className="section-label mb-6">About Us</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Bridging Human Intelligence with{" "}
              <span className="text-gradient">AI Efficiency</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              We are not just a development agency. We are your strategic digital partners. Founded on the principle that technology should empower, not replace, human creativity, we build autonomous systems and robust web platforms that act as leverage for your workforce.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#00FF97]/10 text-[#00FF97] border border-[#00FF97]/20 mt-1 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Human-Controlled AI</h4>
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Our AI implementations are designed to be overseen by your team, multiplying their output tenfold while maintaining human empathy.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#7B61FF]/10 text-[#7B61FF] border border-[#7B61FF]/20 mt-1 shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Precision Engineering</h4>
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>Every application we build is tailored to your exact business specifications, ensuring that technology serves your strategy.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#00FF97]/10 text-[#00FF97] border border-[#00FF97]/20 mt-1 shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Rapid Deployment</h4>
                  <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>We deliver production-ready systems in weeks, not months. Agile sprints with continuous delivery pipelines ensure rapid time-to-market.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary mt-10 inline-flex">
              Read Our Full Story
            </a>
          </div>

          {/* Right column — stats cards */}
          <div className="about-content relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-[#00FF97] mb-2" style={{ fontFamily: "var(--font-heading)" }}>50+</div>
                <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Enterprise Clients</div>
              </div>
              <div className="glass-card rounded-2xl p-8 text-center translate-y-8">
                <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>99%</div>
                <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Client Retention</div>
              </div>
              <div className="glass-card rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>10x</div>
                <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Productivity Boost</div>
              </div>
              <div className="glass-card rounded-2xl p-8 text-center translate-y-8">
                <div className="text-5xl font-bold text-[#7B61FF] mb-2" style={{ fontFamily: "var(--font-heading)" }}>24/7</div>
                <div className="text-sm font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>AI Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
