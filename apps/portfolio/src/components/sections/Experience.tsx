"use client";

import { useRef, MouseEvent } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
    {
        company: "SITE",
        role: "Senior Software Engineer",
        period: "September 2023 – Present",
        location: "Riyadh, KSA",
        description: "Spearheading core module refactoring for National Cybersecurity Authority (NCA) Compliance Platform. Improved UI performance by ~25% using React Query and Ant Design.",
        tags: ["React", "React Query", "Ant Design", "Performance"],
        color: "from-blue-500 to-cyan-500",
        type: "Enterprise Compliance"
    },
    {
        company: "Nextbridge (Aldar Properties)",
        role: "Senior Software Engineer",
        period: "February 2023 – September 2023",
        location: "UAE (Remote)",
        description: "Led frontend team on Dari real-estate platform. Reduced API response handling time by 30% through optimized data-fetching.",
        tags: ["React", "TypeScript", "MobX", "Redux"],
        color: "from-purple-500 to-pink-500",
        type: "Real Estate Tech"
    },
    {
        company: "10Pearls",
        role: "Senior Software Engineer",
        period: "January 2022 – February 2023",
        location: "Lahore",
        description: "Delivered features for Finmark (U.S. SaaS). Built scalable React.js + TypeScript modules and mentored junior developers.",
        tags: ["React.js", "TypeScript", "SaaS", "FinTech"],
        color: "from-emerald-500 to-teal-500",
        type: "FinTech SaaS"
    },
    {
        company: "Five Rivers Technologies",
        role: "Software Engineer (MERN)",
        period: "December 2020 – January 2022",
        location: "Lahore",
        description: "Developed Pepsi Spire interactive platform using React.js, Node.js, and Highcharts.",
        tags: ["MERN Stack", "Highcharts", "Interactive"],
        color: "from-orange-500 to-amber-500",
        type: "Interactive Platform"
    },
    {
        company: "Arhamsoft",
        role: "Software Engineer (MERN)",
        period: "March 2019 – December 2020",
        location: "Lahore",
        description: "Led development of Mathlete.pk. Built modular REST APIs using Node.js, Express, and MongoDB.",
        tags: ["Node.js", "Express", "MongoDB", "REST APIs"],
        color: "from-red-500 to-rose-500",
        type: "EdTech Platform"
    },
    {
        company: "Techstash",
        role: "Software Engineer (MEAN)",
        period: "January 2018 – March 2019",
        location: "Lahore",
        description: "Built e-commerce platforms using Angular, Node.js, and MongoDB.",
        tags: ["Angular", "Node.js", "E-commerce"],
        color: "from-indigo-500 to-violet-500",
        type: "E-Commerce"
    }
];

function ExperienceCard({ experience }: { experience: typeof experiences[0] }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="experience-card group relative rounded-3xl border border-white/10 bg-slate-900/50 px-8 py-10 overflow-hidden"
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
                }}
            />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center rounded-full bg-gradient-to-r ${experience.color} px-3 py-1 text-xs font-semibold text-white`}>
                            {experience.type}
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {experience.company}
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {experience.period}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                        </div>
                    </div>
                </div>

                <div className="md:w-2/3 flex flex-col gap-4">
                    <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                        {experience.role}
                        <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-base leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                        {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {experience.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 ring-1 ring-inset ring-white/10 group-hover:bg-accent/10 group-hover:ring-accent/30 transition-all"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Experience() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.experience-card');
        
        cards.forEach((card: any, i) => {
            gsap.fromTo(card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                    }
                }
            );
        });
    }, { scope: container });

    return (
        <section id="experience" className="py-24 sm:py-32 relative" ref={container}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent tracking-widest uppercase">Case Studies</h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Selected Work.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        A showcase of robust enterprise solutions, platforms, and integrations delivered across diverse industries.
                    </p>
                </div>

                <div className="mx-auto grid grid-cols-1 gap-6">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}
