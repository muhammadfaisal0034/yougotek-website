"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Users, Award, Target } from "lucide-react";

export function AboutPreview() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".about-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="about" className="py-24 relative bg-slate-900 border-y border-slate-800" ref={container}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="about-content relative">
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl" />
            <h2 className="text-sm font-bold tracking-widest uppercase text-sky-400 mb-4">About You Go Tech</h2>
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6 leading-tight">
              Bridging Human Intelligence with AI Efficiency.
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We are not just a development agency. We are your strategic digital partners. Founded on the principle that technology should empower, not replace, human creativity, we build autonomous systems and robust web platforms that act as leverage for your workforce.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-sky-400 mt-1 border border-slate-700">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-50 text-lg">Human-Controlled AI</h4>
                  <p className="text-slate-400 text-sm mt-1">Our AI implementations are designed to be overseen by your team, multiplying their output tenfold while maintaining human empathy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-800 rounded-xl text-sky-400 mt-1 border border-slate-700">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-50 text-lg">Precision Engineering</h4>
                  <p className="text-slate-400 text-sm mt-1">Every application we build is tailored to your exact business specifications, ensuring that technology serves your strategy.</p>
                </div>
              </div>
            </div>
            
            {/* "Read Our Full Story" → scrolls to #about for now; can link to /about page later */}
            <a
              href="#about"
              className="mt-10 inline-block rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 text-slate-50 font-semibold hover:bg-slate-700 transition-colors"
            >
              Read Our Full Story
            </a>
          </div>
          
          <div className="about-content relative h-[500px] rounded-[2rem] overflow-hidden bg-slate-800 border border-slate-700 p-8 flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
             <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
                <div className="rounded-2xl bg-slate-900/50 backdrop-blur-md shadow-sm border border-slate-700 h-full transform -translate-y-4 flex flex-col items-center justify-center p-6 text-center">
                    <Award className="w-12 h-12 text-sky-400 mb-4" />
                    <span className="text-4xl font-bold text-slate-50">50+</span>
                    <span className="text-sm text-slate-400 font-bold uppercase tracking-wider mt-2">Enterprise Clients</span>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg h-full transform translate-y-8 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-4xl font-bold text-white">99%</span>
                    <span className="text-sm text-sky-100 font-bold uppercase tracking-wider mt-2">Client Retention</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
