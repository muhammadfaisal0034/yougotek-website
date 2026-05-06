/**
 * Single registration point for GSAP + plugins.
 * Import this instead of calling gsap.registerPlugin() in every component.
 * Safe to call multiple times — GSAP deduplicates internally.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  
  // Optimize ScrollTrigger performance
  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
  });
  
  // Prevent excessive refreshes during load
  ScrollTrigger.clearScrollMemory("manual");
}

export { gsap, ScrollTrigger };
