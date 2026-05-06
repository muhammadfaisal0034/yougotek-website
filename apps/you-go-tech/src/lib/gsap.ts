/**
 * Single registration point for GSAP + plugins.
 * Import this instead of calling gsap.registerPlugin() in every component.
 * Safe to call multiple times — GSAP deduplicates internally.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
