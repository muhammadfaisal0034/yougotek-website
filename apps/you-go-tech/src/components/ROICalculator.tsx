"use client";

import { useState, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Calculator } from "lucide-react";

export function ROICalculator() {
  const [hours, setHours] = useState(40);
  const container = useRef<HTMLDivElement>(null);
  const hourlyRate = 75;
  const yearlyCost = hours * hourlyRate * 52;
  const automationRate = 0.7;
  const yearlySavings = yearlyCost * automationRate;

  useGSAP(() => {
    gsap.fromTo(".calc-content",
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: container.current, start: "top 75%" }
      }
    );
  }, { scope: container });

  return (
    <section id="calculator" className="relative py-24 lg:py-32" style={{ background: "var(--bg-primary)" }} ref={container}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="blob-green w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="calc-content text-center mb-16">
          <div className="section-label mb-6 mx-auto">
            <Calculator className="h-3.5 w-3.5" />
            ROI Calculator
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            The Cost of <span className="text-gradient">Analog Operations</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Calculate exactly how much energy you are burning on manual workflows. See what happens when intelligent systems take over.
          </p>
        </div>

        <div className="calc-content grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <label htmlFor="hours-slider" className="text-lg font-semibold text-white mb-6 flex justify-between cursor-pointer">
              <span>Manual Hours / Week</span>
              <span className="text-[#00FF97] font-bold text-2xl" style={{ fontFamily: "var(--font-heading)" }}>{hours} hrs</span>
            </label>
            <input
              id="hours-slider"
              type="range"
              min="10"
              max="200"
              step="1"
              value={hours}
              onInput={(e: any) => setHours(Number(e.target.value))}
              onChange={(e: any) => setHours(Number(e.target.value))}
            />
            <div className="flex justify-between mt-3 text-sm" style={{ color: "var(--text-muted)" }}>
              <span>10</span>
              <span>200+</span>
            </div>

            <div className="mt-10 space-y-5">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span style={{ color: "var(--text-secondary)" }}>Average Hourly Rate</span>
                <span className="text-white font-medium">${hourlyRate}/hr</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span style={{ color: "var(--text-secondary)" }}>Current Yearly Cost</span>
                <span className="text-white font-medium">${yearlyCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span style={{ color: "var(--text-secondary)" }}>Automation Rate</span>
                <span className="text-[#00FF97] font-medium">70%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="glass-card rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FF97]/5 to-[#7B61FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="text-sm tracking-widest uppercase font-bold mb-3" style={{ color: "var(--accent)" }}>
                Potential Capital Unlocked
              </div>
              <div className="text-5xl sm:text-7xl font-bold text-white tracking-tighter mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                ${yearlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
              <p className="leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                By deploying robust digital solutions and AI integrations, you can automate ~70% of these manual tasks. Redirect this energy into expanding your business.
              </p>

              <a href="#contact" className="btn-primary w-full justify-center">
                Claim Your Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
