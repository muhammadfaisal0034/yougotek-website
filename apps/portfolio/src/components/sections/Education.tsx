"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { GraduationCap } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function Education() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".edu-card",
            { opacity: 0, scale: 0.9, y: 50 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                ease: "back.out(1.5)",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: container });

    return (
        <section className="py-24 sm:py-32 bg-white/5 relative overflow-hidden" ref={container}>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent tracking-widest uppercase">Academic Background</h2>
                    <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Education
                    </p>
                </div>

                <div className="mx-auto max-w-2xl">
                    <div className="edu-card flex flex-col items-center text-center p-10 rounded-3xl border border-white/10 bg-slate-900/50 hover:bg-slate-800/80 hover:border-accent/30 transition-all duration-300 group">
                        <div className="p-4 bg-accent/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                            <GraduationCap className="w-10 h-10 text-accent" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">BS in Computer Science</h3>
                        <p className="text-slate-300 text-lg">University of Sargodha (UOS), Lahore, Pakistan</p>
                        <div className="mt-4 inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-sm font-medium text-slate-400 ring-1 ring-inset ring-white/10">
                            2014 - 2018
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
