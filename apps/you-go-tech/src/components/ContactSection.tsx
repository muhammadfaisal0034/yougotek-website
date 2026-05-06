"use client";

import { useState, useRef } from "react";
import { Mail, Phone, Send } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".contact-element",
      { y: 40, opacity: 0 },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900" ref={container}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.1)_0%,rgba(15,23,42,1)_100%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="contact-element">
              <h2 className="text-sm font-bold tracking-widest uppercase text-sky-500 mb-4">Initiate Contact</h2>
              <h3 className="text-4xl sm:text-5xl font-bold text-slate-50 mb-6 leading-tight">
                Ready to Upgrade Your Enterprise?
              </h3>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Connect with our strategic engineers in KSA or Canada. We'll audit your current workflows and design a custom digital transformation roadmap.
              </p>
            </div>
            
            <div className="space-y-6 contact-element">
              <a
                href="mailto:strategy@yougotech.com"
                className="flex items-center gap-4 text-slate-50 p-4 rounded-2xl bg-slate-800 border border-slate-700 hover:border-sky-500 transition-colors"
              >
                <Mail className="text-sky-500 shrink-0" />
                <span className="font-semibold">strategy@yougotech.com</span>
              </a>
              <a
                href="tel:+18003444825"
                className="flex items-center gap-4 text-slate-50 p-4 rounded-2xl bg-slate-800 border border-slate-700 hover:border-sky-500 transition-colors"
              >
                <Phone className="text-sky-500 shrink-0" />
                <span className="font-semibold">+1 (800) DIGITAL</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-element bg-slate-800 rounded-[2rem] p-8 border border-slate-700 shadow-xl">
            <h4 className="text-2xl font-bold text-slate-50 mb-6">Request an Audit</h4>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Company Name</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" placeholder="Acme Corp" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all" placeholder="john@acme.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Current Bottlenecks / Goals</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none" placeholder="We need to automate our lead generation and rebuild our client portal..." />
              </div>

              <button 
                type="submit" 
                disabled={status !== "idle"}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 py-4 text-white font-bold hover:bg-sky-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {status === "idle" && (
                  <>Submit Request <Send className="w-4 h-4" /></>
                )}
                {status === "sending" && "Processing..."}
                {status === "sent" && "Received. We'll be in touch."}
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}
