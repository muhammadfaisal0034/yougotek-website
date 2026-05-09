"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { MessageSquare, Quote } from "lucide-react";

const testimonials = [
  {
    id: "01",
    name: "Fahad Al-Rashid",
    role: "Managing Director",
    location: "Riyadh, KSA",
    content: "The 10x speed isn't just marketing—it's real. You Go Tech scaled our operations with their Agentic Workflows, reducing manual overhead by 85% in just 6 weeks.",
  },
  {
    id: "02",
    name: "Sarah Chen",
    role: "CTO, Digital Platforms",
    location: "Toronto, CA",
    content: "Transitioning to Autonomous Digital Systems was the best move we made. Their engineering team delivered an enterprise-grade agentic platform that handles thousands of concurrent tasks.",
  },
  {
    id: "03",
    name: "Marcus Thorne",
    role: "Head of Operations",
    location: "London, UK",
    content: "We were stuck in legacy bottlenecks until You Go Tech implemented their AI-First infrastructure. The precision in their Rapid AI Engineering is unmatched in the industry.",
  },
  {
    id: "04",
    name: "Amara Gupta",
    role: "VP of Engineering",
    location: "San Francisco, US",
    content: "What usually takes 6 months, You Go Tech completed in 5 weeks. Their use of autonomous agents for system architecture is truly pioneering.",
  },
];

export function Testimonials() {
  const container = useRef<HTMLDivElement>(null);
  const marquee = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!marquee.current) return;

    // Entrance animation
    gsap.fromTo(".testimonial-header",
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: container.current, start: "top 80%" }
      }
    );

    // Infinite Marquee logic for the cards
    const marqueeContent = marquee.current;
    const totalWidth = marqueeContent.scrollWidth / 2;
    
    const animation = gsap.to(marqueeContent, {
      x: -totalWidth,
      duration: 35,
      ease: "none",
      repeat: -1,
      overwrite: "auto"
    });

    // Pause on interaction
    marqueeContent.addEventListener("mouseenter", () => animation.pause());
    marqueeContent.addEventListener("mouseleave", () => animation.play());

  }, { scope: container });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white border-t border-slate-100" ref={container}>
      {/* Background blobs to match Services section */}
      <div className="blob-primary pointer-events-none w-[500px] h-[500px] top-0 right-0 opacity-40" />
      <div className="blob-secondary pointer-events-none w-[400px] h-[400px] bottom-0 left-0 opacity-40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 mb-16 testimonial-header">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-label mb-6 mx-auto">Client Success</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Proven <span className="text-gradient">Results</span> at Scale
          </h2>
        </div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-fit gap-6 px-6" ref={marquee}>
          {/* Double the content for seamless infinite flow */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="testimonial-card glass-card group rounded-2xl p-8 relative overflow-hidden bg-white w-[350px] md:w-[400px] flex-shrink-0"
            >
              {/* Hover glow matching Services style */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[rgba(2,132,199,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-sky-50 text-[#0284c7] border border-sky-100 group-hover:glow-accent transition-shadow duration-300">
                    <Quote className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-bold" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>{item.id}</span>
                </div>

                <div className="mb-6 flex-grow">
                  <p className="text-sm leading-relaxed italic" style={{ color: "var(--text-secondary)" }}>
                    &quot;{item.content}&quot;
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-50">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0284c7] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-xs font-medium mt-1" style={{ color: "var(--text-muted)" }}>
                    {item.role} · {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
