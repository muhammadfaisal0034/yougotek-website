"use client";

import { useState, useRef, useEffect } from "react";
import { Calculator } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export function ROICalculator() {
  const [hours, setHours] = useState(40);
  
  useEffect(() => {
    console.log("ROICalculator mounted in browser");
    (window as any).ROICalculatorMounted = true;
  }, []);

  useEffect(() => {
    console.log("ROI Hours updated:", hours);
  }, [hours]);

  const hourlyRate = 50; 
  
  const yearlyCost = hours * hourlyRate * 52;
  const yearlySavings = yearlyCost * 0.7; // Assuming 70% automation potential

  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".roi-container",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        }
      }
    );
  }, { scope: container });

  return (
    <section className="py-24 relative bg-slate-900 border-b border-slate-800" ref={container}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05)_0%,rgba(15,23,42,0)_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-5xl px-6 lg:px-8 roi-container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-sky-500/10 rounded-full mb-6 border border-sky-500/20">
            <Calculator className="w-8 h-8 text-sky-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6">
            The Cost of Analog Operations
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Calculate exactly how much energy you are burning on manual workflows. See what happens when intelligent systems take over.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-slate-800 border border-slate-700 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
          {/* Controls */}
          <div className="flex flex-col justify-center">
            <label htmlFor="hours-slider" className="text-lg font-semibold text-slate-50 mb-6 flex justify-between cursor-pointer">
              <span>Manual Hours / Week:</span>
              <span className="text-sky-400 font-bold text-2xl">{hours} hrs</span>
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
              className="w-full h-2 bg-slate-900 rounded-lg cursor-pointer accent-sky-500 border border-slate-700"
            />
            <div className="flex justify-between mt-3 text-sm text-slate-400">
              <span>10</span>
              <span>200+</span>
            </div>
            
            <div className="mt-12 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Average Hourly Rate</span>
                <span className="text-slate-50 font-medium">${hourlyRate}/hr</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                <span className="text-slate-400">Current Yearly Cost</span>
                <span className="text-slate-50 font-medium">${yearlyCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <h3 className="text-sm tracking-widest uppercase text-sky-400 font-bold mb-2 relative z-10">Potential Capital Unlocked</h3>
            <div className="text-5xl sm:text-7xl font-bold text-white tracking-tighter mb-4 relative z-10">
              ${yearlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 relative z-10">
              By deploying robust digital solutions and AI integrations, you can automate ~70% of these manual tasks. 
              Redirect this energy into expanding your business.
            </p>
            
            {/* "Claim Your Strategy Call" → scrolls to #contact */}
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-4 text-white font-bold text-lg hover:bg-sky-400 transition-colors shadow-lg relative z-10"
            >
              Claim Your Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
