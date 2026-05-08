"use client";

import Link from "next/link";
import { Globe, ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8" style={{ background: "var(--bg-primary)" }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="glass-card rounded-3xl p-10 md:p-16 text-center mb-20 relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[rgba(2,132,199,0.05)] via-transparent to-[rgba(79,70,229,0.05)]" />
          <div className="blob-primary pointer-events-none w-[300px] h-[300px] -top-20 -left-20" />
          <div className="blob-secondary pointer-events-none w-[300px] h-[300px] -bottom-20 -right-20" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Build Something{" "}
              <span className="text-gradient">Extraordinary?</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
              Let&apos;s discuss how we can engineer intelligent systems that accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="btn-primary text-base px-8 py-4">
                Start a Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="mailto:contact@yougotek.com" className="btn-secondary text-base px-8 py-4">
                contact@yougotek.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              <div className="w-8 h-8 rounded-lg bg-[#0284c7] flex items-center justify-center text-white text-sm font-black shadow-sm">
                Y
              </div>
              <span className="text-slate-900">
                You Go <span className="text-[#0284c7]">Tech</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Building intelligent digital systems for the modern enterprise.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0284c7] hover:text-[#0284c7] transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0284c7] hover:text-[#0284c7] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-[#0284c7] hover:text-[#0284c7] transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Navigation</h4>
            <div className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <a key={item} href={item === "Home" ? "/" : `#${item.toLowerCase()}`} className="block text-sm hover:text-[#0284c7] transition-colors" style={{ color: "var(--text-secondary)" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Services</h4>
            <div className="space-y-3">
              {["Web Platforms", "AI Integration", "Cloud Infra", "Cybersecurity"].map((item) => (
                <a key={item} href="#services" className="block text-sm hover:text-[#0284c7] transition-colors" style={{ color: "var(--text-secondary)" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">Locations</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Riyadh, KSA</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Toronto, Canada</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} You Go Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:text-[#0284c7] transition-colors" style={{ color: "var(--text-muted)" }}>Privacy</a>
            <a href="#" className="text-sm hover:text-[#0284c7] transition-colors" style={{ color: "var(--text-muted)" }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
