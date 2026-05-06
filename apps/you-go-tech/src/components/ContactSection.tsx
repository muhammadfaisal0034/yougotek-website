"use client";

import { useState, useRef } from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".contact-element",
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: container.current, start: "top 75%" }
      }
    );
  }, { scope: container });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32" style={{ background: "var(--bg-secondary)" }} ref={container}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="blob-primary pointer-events-none w-[500px] h-[500px] bottom-0 right-0" />
      <div className="blob-secondary pointer-events-none w-[400px] h-[400px] top-20 -left-20" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="contact-element text-center mb-16">
          <div className="section-label mb-6 mx-auto">
            <Mail className="h-3.5 w-3.5" />
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Book a free strategy call. We will audit your current operations and show you how to 10x your efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="contact-element glass-card rounded-2xl p-6 group bg-white">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-50 text-[#0284c7] border border-sky-100 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Email</div>
                  <a href="mailto:contact@yougotech.com" className="text-slate-900 hover:text-[#0284c7] transition-colors font-medium">
                    contact@yougotech.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-element glass-card rounded-2xl p-6 group bg-white">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Phone</div>
                  <a href="tel:+1234567890" className="text-slate-900 hover:text-indigo-600 transition-colors font-medium">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-element glass-card rounded-2xl p-6 group bg-white">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-50 text-[#0284c7] border border-sky-100 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Locations</div>
                  <p className="text-slate-900 font-medium">Riyadh, KSA · Toronto, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-element lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-6 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#0284c7] focus:outline-none focus:ring-1 focus:ring-[#0284c7] transition-colors shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#0284c7] focus:outline-none focus:ring-1 focus:ring-[#0284c7] transition-colors shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                <input
                  id="company"
                  type="text"
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#0284c7] focus:outline-none focus:ring-1 focus:ring-[#0284c7] transition-colors shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#0284c7] focus:outline-none focus:ring-1 focus:ring-[#0284c7] transition-colors resize-none shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "sent" && "✓ Message Sent!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
