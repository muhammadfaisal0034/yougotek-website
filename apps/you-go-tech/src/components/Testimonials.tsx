"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Quote, Cpu, ShieldCheck, Zap, Bot } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Fahad Al-Rashid",
    role: "Managing Director, Logistics KSA",
    location: "Riyadh, KSA",
    content: "The 10x speed isn't just marketing—it's real. You Go Tech scaled our operations with their Agentic Workflows, reducing manual overhead by 85% in just 6 weeks.",
    service: "Rapid AI Engineering",
    id: "ID-0994-KSA",
    pos: "0% 0%"
  },
  {
    name: "Sarah Chen",
    role: "CTO, Digital Platforms",
    location: "Toronto, CA",
    content: "Transitioning to Autonomous Digital Systems was the best move we made. Their engineering team delivered an enterprise-grade agentic platform that handles thousands of concurrent tasks with zero latency.",
    service: "Autonomous Systems",
    id: "ID-2210-CA",
    pos: "100% 0%"
  },
  {
    name: "Marcus Thorne",
    role: "Head of Operations, Global Finance",
    location: "London, UK",
    content: "We were stuck in legacy bottlenecks until You Go Tech implemented their AI-First infrastructure. The precision in their Rapid AI Engineering is unmatched in the industry.",
    service: "AI-First Infrastructure",
    id: "ID-8831-UK",
    pos: "0% 100%"
  },
  {
    name: "Amara Gupta",
    role: "VP of Engineering, SaaS Enterprise",
    location: "San Francisco, US",
    content: "What usually takes 6 months, You Go Tech completed in 5 weeks. Their use of autonomous agents for system architecture is truly pioneering.",
    service: "Agentic Workflows",
    id: "ID-4420-US",
    pos: "100% 100%"
  }
];

export function Testimonials() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(".robotic-card",
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: container.current, start: "top 75%" }
        }
      );
    }, 100);
    return () => clearTimeout(timer);
  }, { scope: container });

  return (
    <section className="py-24 lg:py-32 overflow-hidden relative border-t border-slate-100" style={{ background: "#ffffff" }} ref={container}>
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0284c7 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#0284c7] text-xs font-bold uppercase tracking-widest mb-6">
            <Bot className="h-3.5 w-3.5" />
            Engineering Validation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Built for <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-600">
            Direct outcomes from our autonomous system deployments and architectural audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="robotic-card group relative flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-8 hover:border-[#0284c7] hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                  {item.id}
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                </div>
              </div>

              <Quote className="w-8 h-8 text-sky-100 mb-4" />
              
              <p className="text-slate-600 leading-relaxed mb-8 text-sm font-medium">
                &quot;{item.content}&quot;
              </p>

              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-100 group-hover:border-[#0284c7]/30 transition-colors">
                  <div 
                    className="absolute inset-0 w-[200%] h-[200%]"
                    style={{ 
                      backgroundImage: 'url(/testimonials-base.png)',
                      backgroundSize: '200% 200%',
                      backgroundPosition: item.pos,
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{item.name}</div>
                  <div className="text-[10px] font-bold text-[#0284c7] uppercase tracking-wider">
                    {item.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Performance Metrics Bar */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-10 md:gap-24 opacity-60">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-slate-400" />
            <span className="text-xs font-mono text-slate-500">SYSTEM_STABLE</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-mono text-slate-500">DATA_ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-mono text-slate-500">SPEED_OPTIMIZED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
