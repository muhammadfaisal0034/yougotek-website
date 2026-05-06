"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Code } from "lucide-react";
import Link from "next/link";

export function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();
        
        tl.fromTo(".hero-badge",
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
        )
        .fromTo(".hero-title-line",
            { y: 40, opacity: 0, rotationX: -45 },
            { y: 0, opacity: 1, rotationX: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
            "-=0.4"
        )
        .fromTo(".hero-desc",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            "-=0.4"
        )
        .fromTo(".hero-cta",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
        );
        
        // Floating animation for background elements
        gsap.to(".bg-shape", {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            rotation: "random(-15, 15)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.5
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 lg:px-8">

            {/* Premium Agency Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[#0f172a]" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-[#0f172a]" />
            
            {/* Animated Background Shapes */}
            <div className="bg-shape absolute top-1/4 left-1/4 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[128px]" />
            <div className="bg-shape absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-[128px]" />
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="mx-auto max-w-4xl text-center z-10 pt-20">
                <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-md mb-8">
                    <Code className="h-4 w-4" />
                    <span>Muhammad Faisal — Engineering Excellence</span>
                </div>
                
                <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl perspective-1000">
                    <div className="hero-title-line overflow-hidden pb-2">
                        Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">Digital</span>
                    </div>
                    <div className="hero-title-line overflow-hidden pb-2">
                        Experiences
                    </div>
                </h1>
                
                <p className="hero-desc mt-8 text-lg leading-relaxed text-slate-400 max-w-2xl mx-auto sm:text-xl">
                    I deliver scalable, secure, and high-performance enterprise solutions. Transforming complex business requirements into elegant, robust code architectures.
                </p>
                
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <Link
                        href="#services"
                        className="hero-cta group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] hover:shadow-[0_0_60px_-15px_rgba(14,165,233,0.7)] transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10">Explore Services</span>
                        <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#contact"
                        className="hero-cta group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                    >
                        Let's Talk <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hero-cta">
                <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </div>
        </section>
    );
}
