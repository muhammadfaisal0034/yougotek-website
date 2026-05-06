"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function Contact() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            }
        });

        tl.fromTo(".contact-header",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(".contact-item",
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
        )
        .fromTo(".contact-form",
            { x: 30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            "-=0.6"
        );
    }, { scope: container });

    return (
        <section id="contact" className="py-24 sm:py-32 relative overflow-hidden" ref={container}>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,rgba(14,165,233,0.1),rgba(15,23,42,0))]" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="contact-header mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-accent tracking-widest uppercase">Start a Conversation</h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                        Ready to Build?
                    </p>
                    <p className="mt-6 text-lg leading-8 text-slate-400">
                        Whether you need a full-scale enterprise platform or a high-performance frontend, I'm here to bring your vision to life.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-5xl">
                    <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-2">
                        <div className="flex flex-col gap-6 justify-center">
                            <div className="contact-item group flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 p-4 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Email</p>
                                    <Link href="mailto:muhammadfaisal0034@gmail.com" className="text-lg text-white font-semibold hover:text-accent transition-colors">
                                        muhammadfaisal0034@gmail.com
                                    </Link>
                                </div>
                            </div>

                            <div className="contact-item group flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 p-4 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6 text-accent" />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Phone</p>
                                    <Link href="tel:+966550237108" className="text-lg text-white font-semibold hover:text-accent transition-colors">
                                        +966 550237108
                                    </Link>
                                </div>
                            </div>

                            <div className="contact-item group flex items-center gap-6 p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:bg-slate-800/60 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative z-10 p-4 bg-accent/10 rounded-xl group-hover:scale-110 transition-transform">
                                    <MapPin className="w-6 h-6 text-accent" />
                                </div>
                                <div className="relative z-10">
                                    <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Location</p>
                                    <p className="text-lg text-white font-semibold">
                                        Riyadh, KSA (Transferable Iqama)
                                    </p>
                                </div>
                            </div>
                        </div>

                        <form
                            className="contact-form flex flex-col gap-6 p-8 rounded-3xl bg-slate-900/60 border border-white/10 relative overflow-hidden"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Message sent successfully!");
                            }}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -z-10" />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-slate-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="mt-2 block w-full rounded-xl border-0 bg-slate-800/50 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 px-4 transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="mt-2 block w-full rounded-xl border-0 bg-slate-800/50 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 px-4 transition-all"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-300">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    className="mt-2 block w-full rounded-xl border-0 bg-slate-800/50 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 px-4 transition-all resize-none"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 w-full rounded-xl bg-accent px-4 py-4 text-sm font-semibold text-white shadow-sm hover:bg-accent/80 hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-all"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
