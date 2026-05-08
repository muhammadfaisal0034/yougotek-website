"use client";

import { useState, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Calculator } from "lucide-react";

export function ROICalculator() {
  const [scope, setScope] = useState(2);
  const container = useRef<HTMLDivElement>(null);
  
  // Logic: 1 = MVP, 2 = Standard, 3 = Enterprise, 4 = Ecosystem, 5 = Global
  const scopeNames = ["MVP", "Standard App", "Enterprise Platform", "AI Ecosystem", "Global Infrastructure"];
  
  const tradCost = scope * 50000;
  const youGoCost = scope * 15000;
  const tradTime = scope * 2; // months
  const youGoTime = scope * 1; // weeks
  
  const savings = tradCost - youGoCost;

  useGSAP(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(".calc-content",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: container.current, start: "top 75%" }
        }
      );
    }, 100);
    return () => clearTimeout(timer);
  }, { scope: container });

  return (
    <section id="calculator" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--bg-secondary)" }} ref={container}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="blob-primary pointer-events-none w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="calc-content text-center mb-16">
          <div className="section-label mb-6 mx-auto">
            <Calculator className="h-3.5 w-3.5" />
            Efficiency Simulator
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Traditional Agency vs. <span className="text-gradient">You Go Tech</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Our AI-assisted engineering process eliminates the overhead of traditional development. Visualize the difference in speed, cost, and accuracy.
          </p>
        </div>

        <div className="calc-content grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="glass-card rounded-2xl p-8 md:p-10 bg-white">
            <label htmlFor="scope-slider" className="text-lg font-semibold text-slate-900 mb-6 flex justify-between cursor-pointer">
              <span>Project Scope</span>
              <span className="text-[#0284c7] font-bold text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{scopeNames[scope-1]}</span>
            </label>
            <input
              id="scope-slider"
              type="range"
              min="1"
              max="5"
              step="1"
              value={scope}
              onInput={(e: any) => setScope(Number(e.target.value))}
              onChange={(e: any) => setScope(Number(e.target.value))}
            />
            <div className="flex justify-between mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <span>MVP</span>
              <span>Global</span>
            </div>

            <div className="mt-10 space-y-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Traditional Agency</div>
                <div className="flex justify-between items-end">
                  <div className="text-2xl font-bold text-slate-700">${tradCost.toLocaleString()}</div>
                  <div className="text-sm font-medium text-slate-500">{tradTime} Months</div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-100">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0284c7] mb-2">You Go Tech (AI-Assisted)</div>
                <div className="flex justify-between items-end">
                  <div className="text-2xl font-bold text-slate-900">${youGoCost.toLocaleString()}</div>
                  <div className="text-sm font-bold text-[#0284c7]">{youGoTime} {youGoTime === 1 ? 'Week' : 'Weeks'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group bg-white">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[rgba(2,132,199,0.05)] to-[rgba(79,70,229,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="text-sm tracking-widest uppercase font-bold mb-3" style={{ color: "var(--accent)" }}>
                Capital Savings
              </div>
              <div className="text-5xl sm:text-7xl font-bold text-slate-900 tracking-tighter mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                ${savings.toLocaleString()}
              </div>
              <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                By leveraging AI-assisted development, we achieve 100% accuracy with 10x speed. Redirect your capital from development overhead to market dominance.
              </p>

              <a href="#contact" className="btn-primary w-full justify-center">
                Accelerate Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
