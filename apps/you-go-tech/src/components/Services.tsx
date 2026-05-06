"use client";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { Globe, Cpu, LineChart, Code, Shield, Cloud } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Enterprise Web Platforms",
    description: "We architect custom, highly-scalable web platforms designed for high traffic and complex business logic.",
    icon: Code,
    color: "bg-sky-500 text-white"
  },
  {
    id: "02",
    title: "AI Integration",
    description: "Deploying intelligent AI models into your workflows to automate data processing and decision making.",
    icon: Cpu,
    color: "bg-blue-600 text-white"
  },
  {
    id: "03",
    title: "Digital Growth",
    description: "Data-driven strategies and robust systems to help you scale your business globally.",
    icon: LineChart,
    color: "bg-slate-700 text-white"
  },
  {
    id: "04",
    title: "Cloud Infrastructure",
    description: "Modern cloud environments ensuring high uptime, infinite scalability, and reduced costs.",
    icon: Cloud,
    color: "bg-slate-700 text-white"
  },
  {
    id: "05",
    title: "Cybersecurity",
    description: "Protecting your digital assets with enterprise-grade security protocols.",
    icon: Shield,
    color: "bg-blue-600 text-white"
  },
  {
    id: "06",
    title: "Global Reach",
    description: "Tailored solutions for transitioning online and tapping into new planetary markets.",
    icon: Globe,
    color: "bg-sky-500 text-white"
  }
];

export function Services() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.service-card');
    
    cards.forEach((card: any, i) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          }
        }
      );
    });
  }, { scope: container });

  return (
    <section id="services" className="py-24 relative bg-slate-900 overflow-hidden border-b border-slate-800" ref={container}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest uppercase text-sky-500 mb-4">Capabilities</h2>
          <p className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-50">
            Comprehensive Digital Transformation
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            We provide a complete suite of engineering services to modernize your operations. From building robust APIs to deploying intelligent AI assistants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="service-card group relative p-8 rounded-3xl bg-slate-800/50 border border-slate-700 hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-bold text-slate-700 ml-auto">{service.id}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-50 mb-3 group-hover:text-sky-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
