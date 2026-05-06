"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const stats = [
    { name: "Years of Experience", value: 8, suffix: "+" },
    { name: "Enterprise Projects", value: 20, suffix: "+" },
    { name: "Client Satisfaction", value: 100, suffix: "%" },
    { name: "Code Commits", value: 10, suffix: "k+" },
];

export function Stats() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const numbers = gsap.utils.toArray('.stat-number');
        
        numbers.forEach((el: any, i) => {
            const targetValue = stats[i].value;
            
            gsap.fromTo(el,
                { textContent: 0 },
                {
                    textContent: targetValue,
                    duration: 2,
                    ease: "power2.out",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    onUpdate: function() {
                        el.innerHTML = Math.ceil(Number(this.targets()[0].textContent)) + stats[i].suffix;
                    }
                }
            );
        });

        gsap.fromTo(".stat-card",
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                }
            }
        );
    }, { scope: container });

    return (
        <section className="relative py-12 sm:py-16" ref={container}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.name}
                            className="stat-card relative mx-auto flex w-full max-w-xs flex-col gap-y-4 rounded-3xl bg-white/5 border border-white/10 p-8 overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <dt className="text-sm font-medium leading-7 text-slate-400 uppercase tracking-wider relative z-10">{stat.name}</dt>
                            <dd className="order-first text-5xl font-extrabold tracking-tight text-white relative z-10">
                                <span className="stat-number text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-400">0</span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
