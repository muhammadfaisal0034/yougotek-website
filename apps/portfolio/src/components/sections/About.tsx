"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Terminal, Users, Cpu, Globe } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function About() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            }
        });

        tl.fromTo(".about-header", 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".bento-item", 
            { y: 50, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.2)" },
            "-=0.4"
        );
    }, { scope: container });

    return (
        <section id="about" className="py-24 sm:py-32 relative overflow-hidden" ref={container}>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-[#0f172a] to-[#0f172a]" />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="about-header mx-auto max-w-2xl lg:mx-0 mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent tracking-widest uppercase">The Agency Approach</h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Engineering with Precision.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        I am a Senior Full-Stack Engineer with 8+ years of experience delivering scalable, secure, and high-performance web platforms. Operating as a one-man agency, I bring enterprise-grade solutions to fintech, compliance, and e-commerce domains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {/* Item 1 */}
                    <div className="bento-item md:col-span-2 rounded-3xl bg-slate-900/50 border border-white/10 p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Terminal className="h-10 w-10 text-accent mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-2">Modern Stack</h3>
                        <p className="text-slate-400">
                            Expertise in React (Next.js, Vite, Redux) and Node.js (Express, MongoDB). Building modular, multi-tenant architectures tailored for enterprise SaaS and robust backend systems.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="bento-item rounded-3xl bg-slate-900/50 border border-white/10 p-8 relative overflow-hidden group flex flex-col justify-end bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
                        <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/60 transition-colors duration-500" />
                        <div className="relative z-10">
                            <Cpu className="h-8 w-8 text-white mb-4" />
                            <h3 className="text-xl font-bold text-white">Performance</h3>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bento-item rounded-3xl bg-accent/10 border border-accent/20 p-8 relative overflow-hidden group">
                        <Users className="h-8 w-8 text-accent mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Leadership</h3>
                        <p className="text-slate-400 text-sm">
                            Proven track record of leading cross-functional teams to deliver clean, maintainable solutions on time.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div className="bento-item md:col-span-2 rounded-3xl bg-slate-900/50 border border-white/10 p-8 relative overflow-hidden group">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />
                        <Globe className="h-10 w-10 text-indigo-400 mb-6 relative z-10" />
                        <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Global Impact</h3>
                        <p className="text-slate-400 relative z-10">
                            Delivering Vision 2030-aligned government projects and complex real estate platforms with a focus on scalability and security.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
