"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Quote, CheckCircle2, MessageSquare } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Fahad Al-Rashid",
    role: "Founder, SaudiLogistics",
    location: "Riyadh, KSA",
    content: "The 10x speed isn't just marketing—it's real. You Go Tech scaled our operations with their Agentic Workflows, reducing manual overhead by 85% in just 6 weeks.",
    service: "Rapid AI Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Sarah Chen",
    role: "CTO, NexaSystems",
    location: "Toronto, CA",
    content: "Transitioning to Autonomous Digital Systems was the best move we made. Their engineering team delivered an enterprise-grade agentic platform that handles thousands of concurrent tasks with zero latency.",
    service: "Autonomous Systems",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Marcus Thorne",
    role: "Head of Operations, FinEdge",
    location: "London, UK",
    content: "We were stuck in legacy bottlenecks until You Go Tech implemented their AI-First infrastructure. The precision in their Rapid AI Engineering is unmatched in the industry.",
    service: "AI-First Infrastructure",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    name: "Amara Gupta",
    role: "VP of Engineering, CloudScale",
    location: "San Francisco, US",
    content: "What usually takes 6 months, You Go Tech completed in 5 weeks. Their use of autonomous agents for system architecture is truly pioneering.",
    service: "Agentic Workflows",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export function Testimonials() {
  const container = useRef<HTMLDivElement>(null);
  const marquee = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marquee.current) return;

    // Standard entrance animation
    gsap.fromTo(".testimonial-header",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: container.current, start: "top 80%" }
      }
    );

    // Infinite Marquee logic
    const marqueeContent = marquee.current;
    const totalWidth = marqueeContent.scrollWidth / 2;
    
    gsap.to(marqueeContent, {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
      overwrite: "auto"
    });

    // Pause on hover
    marqueeContent.addEventListener("mouseenter", () => gsap.to(marqueeContent, { timeScale: 0, duration: 0.5 }));
    marqueeContent.addEventListener("mouseleave", () => gsap.to(marqueeContent, { timeScale: 1, duration: 0.5 }));

  }, { scope: container });

  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-white" ref={container}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 testimonial-header">
        <div className="text-center">
          <div className="section-label mb-6 mx-auto">
            <MessageSquare className="h-3.5 w-3.5" />
            Client Success
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Trusted by Leaders in <span className="text-gradient">AI-First</span> Enterprise
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Don&apos;t take our word for it. See how we&apos;ve transformed operations for global tech pioneers.
          </p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative">
        {/* Fades */}
        <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit gap-6 px-6" ref={marquee}>
          {/* Double the array for seamless infinite scroll */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div 
              key={`${item.name}-${index}`}
              className="w-[400px] flex-shrink-0 glass-card rounded-2xl p-8 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3 h-3" />
                  {item.service}
                </div>
              </div>

              <Quote className="w-8 h-8 text-sky-100 mb-4" />
              
              <p className="text-slate-700 leading-relaxed mb-8 font-medium">
                &quot;{item.content}&quot;
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{item.name}</div>
                  <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                    {item.role} · {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trusted By Logo Bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 opacity-40 grayscale filter">
        <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20">
          {["NexaS", "SaudiL", "FinEdge", "CloudS", "MetaQ"].map((logo) => (
            <div key={logo} className="text-xl font-black tracking-tighter text-slate-400 font-heading">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
