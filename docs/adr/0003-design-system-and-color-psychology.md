# Architecture Decision Record

## Title: 0003. Design System and Color Psychology for You Go Tech

## Context
The goal is to create a design that goes "beyond human limits", deeply engaging the user's psychology to maximize retention and interaction. A generic dark mode is insufficient for a truly "mindblowing" experience.

## Decision
We will implement a **Dynamic Aurora / Quantum Design System**:
- **Base Background:** "Deep Obsidian" (`#050505`) to create a sense of infinite space, premium quality, and to reduce eye strain.
- **Dynamic Accents (The Aurora Effect):** Instead of static primary colors, we will use WebGL/Three.js and GSAP to create fluid, shifting ambient gradients that follow the user's cursor and scroll position.
- **Psychological Palette:** 
  - **Quantum Coral (`#FF6B6B`)**: Evokes urgency, passion, and human connection (used for primary CTAs).
  - **Cyber Chartreuse (`#D4FF00`)**: Evokes growth, innovation, and cutting-edge tech (used for highlights and metrics).
  - **Ethereal Blue (`#4D9FFF`)**: Evokes trust, security, and intelligence (used for structural elements and AI representation).
- **Typography:** A brutalist/modern mix. Oversized, tightly-tracked geometric headers that demand attention, combined with highly legible body text.

## Consequences
- **Positive:** Creates an unforgettable, highly visceral brand identity that stands out from typical agency templates. Increases time-on-page through interactive, fluid feedback.
- **Negative:** Requires complex shader programming and animation choreography to ensure the fluid backgrounds do not negatively impact scrolling performance.
