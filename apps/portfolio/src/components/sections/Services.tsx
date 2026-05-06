"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Code2, Database, Layout, Server, Settings, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const services = [
    {
        title: "Frontend Engineering",
        description: "Crafting pixel-perfect, responsive, and accessible user interfaces with modern React, Next.js, and TypeScript.",
        icon: Layout,
        skills: ["React.js", "Next.js", "Tailwind CSS", "Redux"]
    },
    {
        title: "Backend Development",
        description: "Building robust, scalable, and secure APIs and microservices to power enterprise applications.",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
        title: "Database Architecture",
        description: "Designing efficient data models and optimizing queries for high-performance data storage.",
        icon: Database,
        skills: ["MongoDB", "PostgreSQL", "NoSQL", "SQL"]
    },
    {
        title: "Cloud & DevOps",
        description: "Automating deployments and managing cloud infrastructure to ensure high availability and smooth CI/CD pipelines.",
        icon: Settings,
        skills: ["Docker", "AWS S3", "CI/CD", "Git"]
    },
    {
        title: "Quality Assurance",
        description: "Ensuring code reliability through comprehensive testing strategies and rigorous code reviews.",
        icon: ShieldCheck,
        skills: ["Jest", "Playwright", "Code Reviews"]
    },
    {
        title: "System Architecture",
        description: "Architecting modular, multi-tenant solutions tailored for enterprise SaaS and large-scale applications.",
        icon: Code2,
        skills: ["Microservices", "System Design", "Scalability"]
    }
];

export function Services() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.service-card');
        
        gsap.fromTo(cards, 
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: container });

    return (
        <section id="services" className="py-24 sm:py-32 bg-slate-900/50" ref={container}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent tracking-widest uppercase">My Expertise</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Premium Services
                    </p>
                    <p className="mt-4 text-lg leading-8 text-muted-foreground">
                        Delivering end-to-end solutions combining elegant frontends with robust, scalable backends.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="service-card group relative rounded-3xl border border-white/10 bg-slate-900/40 p-8 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10">
                                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10 group-hover:ring-accent/30 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
