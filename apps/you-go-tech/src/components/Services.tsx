"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Globe, Cpu, LineChart, Code, Shield, Cloud } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Enterprise Web Platforms",
    description: "Custom, highly-scalable web platforms designed for high traffic and complex business logic. Built with Next.js, React, and modern cloud architectures.",
    icon: Code,
  },
  {
    id: "02",
    title: "AI Integration",
    description: "Deploying intelligent AI models into your workflows to automate data processing, decision making, and customer interactions at scale.",
    icon: Cpu,
  },
  {
    id: "03",
    title: "Digital Growth Strategy",
    description: "Data-driven strategies and robust systems to help you scale your business globally with measurable ROI and continuous optimization.",
    icon: LineChart,
  },
  {
    id: "04",
    title: "Cloud Infrastructure",
    description: "Modern cloud environments on AWS, GCP, and Azure ensuring high uptime, infinite scalability, and reduced operational costs.",
    icon: Cloud,
  },
  {
    id: "05",
    title: "Cybersecurity",
    description: "Protecting your digital assets with enterprise-grade security protocols, penetration testing, and compliance frameworks.",
    icon: Shield,
  },
  {
    id: "06",
    title: "Global Reach",
    description: "Tailored solutions for transitioning online and tapping into new planetary markets with multi-language and multi-region support.",
    icon: Globe,
  },
];

export function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".service-card");
    cards.forEach((card: any) => {
      gsap.fromTo(card,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 88%" }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "var(--bg-primary)" }} ref={container}>
      <div className="blob-purple w-[500px] h-[500px] top-0 right-0" />
      <div className="blob-green w-[400px] h-[400px] bottom-0 left-0" />

      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="section-label mb-6 mx-auto">Our Capabilities</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Comprehensive Digital{" "}
            <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A complete suite of engineering services to modernize your operations. From building robust APIs to deploying intelligent AI assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="service-card glass-card group rounded-2xl p-8 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF97]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-[#00FF97]/10 text-[#00FF97] border border-[#00FF97]/20 group-hover:glow-green transition-shadow duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-bold" style={{ color: "var(--text-muted)", fontFamily: "var(--font-heading)" }}>{service.id}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00FF97] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
