/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /* Replaces the default palette outright rather than extending it, so a
       third colour cannot be introduced by accident: `text-green-500` and
       friends simply do not compile. */
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      ink: "#0A0A0A",
      floral: "#FFFAF0",
    },
    extend: {
      /* Preflight and ring defaults, pulled into the palette. */
      borderColor: {
        DEFAULT: "rgb(10 10 10 / 0.15)",
      },
      ringColor: {
        DEFAULT: "#0A0A0A",
      },
      ringOffsetColor: {
        DEFAULT: "#FFFAF0",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Instrument Serif'", "Georgia", "Cambria", "serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      spacing: {
        /* Header height, shared by the nav bar and the mobile sheet offset. */
        22: "5.5rem",
      },
      maxWidth: {
        content: "72rem",
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 45%": { opacity: "1" },
          "50%, 95%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        marquee: "marquee 40s linear infinite",
        blink: "blink 1.2s step-end infinite",
      },
    },
  },
  plugins: [],
}
