import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock GSAP as it doesn't run well in JSDOM
vi.mock('gsap', () => ({
  default: {
    registerPlugin: vi.fn(),
    fromTo: vi.fn(),
    timeline: vi.fn(() => ({
      fromTo: vi.fn().mockReturnThis(),
    })),
    utils: {
      toArray: vi.fn((arg) => (Array.isArray(arg) ? arg : [])),
    },
  },
  ScrollTrigger: {
    registerPlugin: vi.fn(),
  },
}))

vi.mock('@gsap/react', () => ({
  useGSAP: vi.fn((fn) => fn()),
}))
