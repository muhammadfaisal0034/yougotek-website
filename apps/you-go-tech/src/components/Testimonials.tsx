"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Quote, Cpu, ShieldCheck, Zap, Bot } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Fahad Al-Rashid",
    role: "Founder, SaudiLogistics",
    location: "Riyadh, KSA",
    content: "The 10x speed isn't just marketing—it's real. You Go Tech scaled our operations with their Agentic Workflows, reducing manual overhead by 85% in just 6 weeks.",
    service: "Rapid AI Engineering",
    id: "ID-0994-KSA",
    pos: "0% 0%"
  },
  {
    name: "Sarah Chen",
    role: "CTO, NexaSystems",
    location: "Toronto, CA",
    content: "Transitioning to Autonomous Digital Systems was the best move we made. Their engineering team delivered an enterprise-grade agentic platform that handles thousands of concurrent tasks with zero latency.",
    service: "Autonomous Systems",
    id: "ID-2210-CA",
    pos: "100% 0%"
  },
  {
    name: "Marcus Thorne",
    role: "Head of Operations, FinEdge",
    location: "London, UK",
    content: "We were stuck in legacy bottlenecks until You Go Tech implemented their AI-First infrastructure. The precision in their Rapid AI Engineering is unmatched in the industry.",
    service: "AI-First Infrastructure",
    id: "ID-8831-UK",
    pos: "0% 100%"
  },
  {
    name: "Amara Gupta",
    role: "VP of Engineering, CloudScale",
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
        { scale: 0.95, opacity: 0, y: 30 },
        {
          scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
          scrollTrigger: { trigger: container.current, start: "top 70%" }
        }
      );

      gsap.to(".scan-line", {
        y: "400px",
        duration: 3,
        repeat: -1,
        ease: "none",
        stagger: 0.5
      });
    }, 100);
    return () => clearTimeout(timer);
  }, { scope: container });

  return (
    <section className="py-24 lg:py-32 overflow-hidden relative" style={{ background: "#020617" }} ref={container}>
      {/* Cyber Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '30px 30px' }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-bold uppercase tracking-widest mb-6">
            <Bot className="h-3.5 w-3.5" />
            System Validation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Proven <span className="text-gradient">Intelligence</span> Deployment
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-400">
            Real-world performance metrics from our autonomous system integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div 
              key={item.id}
              className="robotic-card group relative flex flex-col h-full rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 hover:border-[#0284c7]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Scan Line Effect */}
              <div className="scan-line absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0284c7] to-transparent opacity-0 group-hover:opacity-100" />
              
              <div className="flex items-center justify-between mb-8">
                <div className="text-[10px] font-mono text-[#0284c7] tracking-widest uppercase">
                  {item.id}
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                </div>
              </div>

              <Quote className="w-8 h-8 text-[#0284c7]/20 mb-4" />
              
              <p className="text-slate-300 leading-relaxed mb-8 text-sm font-medium italic">
                &quot;{item.content}&quot;
              </p>

              <div className="mt-auto pt-6 border-t border-slate-800/50 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-700 group-hover:border-[#0284c7]/50 transition-colors">
                  <div 
                    className="absolute inset-0 w-[200%] h-[200%]"
                    style={{ 
                      backgroundImage: 'url(/testimonials-base.png)',
                      backgroundSize: '200% 200%',
                      backgroundPosition: item.pos,
                      filter: 'contrast(1.1) brightness(0.9)'
                    }}
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{item.name}</div>
                  <div className="text-[10px] font-bold text-[#0284c7] uppercase tracking-wider">
                    {item.role}
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-slate-800 rounded-br-2xl group-hover:border-[#0284c7]/50 transition-colors" />
            </div>
          ))}
        </div>

        {/* Global Performance Metrics Bar */}
        <div className="mt-20 pt-10 border-t border-slate-800/30 flex flex-wrap justify-center gap-10 md:gap-24 opacity-50">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-[#0284c7]" />
            <span className="text-xs font-mono text-slate-400">CORE_V12_STABLE</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-xs font-mono text-slate-400">ENCRYPTION_AES256</span>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-mono text-slate-400">LATENCY_9MS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
