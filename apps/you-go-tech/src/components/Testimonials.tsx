"use client";

import { useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Quote, Cpu, ShieldCheck, Zap, Bot, ChevronLeft, ChevronRight, Activity } from "lucide-react";

const testimonials = [
  {
    name: "Fahad Al-Rashid",
    role: "Managing Director",
    sector: "Logistics KSA",
    location: "Riyadh, KSA",
    content: "The 10x speed isn't just marketing—it's real. You Go Tech scaled our operations with their Agentic Workflows, reducing manual overhead by 85% in just 6 weeks.",
    service: "Rapid AI Engineering",
    id: "ID-0994-KSA",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    sector: "Digital Platforms",
    location: "Toronto, CA",
    content: "Transitioning to Autonomous Digital Systems was the best move we made. Their engineering team delivered an enterprise-grade agentic platform that handles thousands of concurrent tasks with zero latency.",
    service: "Autonomous Systems",
    id: "ID-2210-CA",
  },
  {
    name: "Marcus Thorne",
    role: "Head of Operations",
    sector: "Global Finance",
    location: "London, UK",
    content: "We were stuck in legacy bottlenecks until You Go Tech implemented their AI-First infrastructure. The precision in their Rapid AI Engineering is unmatched in the industry.",
    service: "AI-First Infrastructure",
    id: "ID-8831-UK",
  },
  {
    name: "Amara Gupta",
    role: "VP of Engineering",
    sector: "SaaS Enterprise",
    location: "San Francisco, US",
    content: "What usually takes 6 months, You Go Tech completed in 5 weeks. Their use of autonomous agents for system architecture is truly pioneering.",
    service: "Agentic Workflows",
    id: "ID-4420-US",
  }
];

export function Testimonials() {
  const container = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    gsap.fromTo(".testimonial-content", 
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, { dependencies: [active], scope: container });

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 overflow-hidden relative border-t border-slate-100" style={{ background: "#ffffff" }} ref={container}>
      {/* Subtle Technical Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#0284c7 1px, transparent 1px), linear-gradient(90deg, #0284c7 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-[#0284c7] text-xs font-bold uppercase tracking-widest mb-6">
            <Activity className="h-3.5 w-3.5" />
            Performance Validation
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Client <span className="text-gradient">Intelligence</span> Briefs
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main Carousel Card */}
          <div 
            ref={cardRef}
            className="testimonial-content relative rounded-3xl border border-slate-100 bg-white p-8 md:p-12 shadow-2xl shadow-sky-500/5 overflow-hidden"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-50 to-transparent opacity-50" />
            
            <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
              {/* Left Side: Metadata */}
              <div className="w-full md:w-1/3 space-y-6">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">System_ID</div>
                  <div className="text-sm font-mono font-bold text-[#0284c7]">{testimonials[active].id}</div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Sector</div>
                  <div className="text-sm font-bold text-slate-900">{testimonials[active].sector}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Status</div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    VERIFIED_DEPLOYMENT
                  </div>
                </div>

                <div className="pt-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-[#0284c7] font-black text-xl shadow-lg">
                    {testimonials[active].name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="w-full md:w-2/3">
                <Quote className="w-12 h-12 text-sky-100 mb-6" />
                <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed mb-10">
                  &quot;{testimonials[active].content}&quot;
                </p>
                
                <div className="space-y-1">
                  <div className="text-lg font-bold text-slate-900">{testimonials[active].name}</div>
                  <div className="text-sm font-medium text-slate-500">
                    {testimonials[active].role} · {testimonials[active].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:border-[#0284c7] hover:text-[#0284c7] transition-all bg-white shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-[#0284c7]' : 'w-2 bg-slate-200'}`}
                />
              ))}
            </div>

            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:border-[#0284c7] hover:text-[#0284c7] transition-all bg-white shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-24 pt-10 border-t border-slate-50 flex flex-wrap justify-center gap-8 md:gap-20 opacity-50">
          {[
            { icon: Cpu, label: "NODE_STABLE" },
            { icon: ShieldCheck, label: "ARCH_VERIFIED" },
            { icon: Zap, label: "SPEED_OPTIMIZED" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <item.icon className="w-4 h-4 text-[#0284c7]" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
