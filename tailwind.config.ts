import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["Source Serif 4", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        "silly-1": ["Comforter Brush", "cursive"],
        "silly-2": ["Dela Gothic One", "sans-serif"],
        "silly-3": ["Press Start 2P", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
          foreground: "hsl(var(--highlight-foreground))",
        },
        callout: {
          DEFAULT: "hsl(var(--callout))",
          border: "hsl(var(--callout-border))",
          foreground: "hsl(var(--callout-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "silly-shake": {
          // Anticipation - squash down
          "0%": { transform: "translateY(0) scaleY(1) scaleX(1)" },
          "8%": { transform: "translateY(2px) scaleY(0.92) scaleX(1.08)" },
          // First jump up with stretch
          "18%": { transform: "translateY(-12px) scaleY(1.15) scaleX(0.9)" },
          // Land and squash
          "28%": { transform: "translateY(0) scaleY(0.88) scaleX(1.12)" },
          // Second smaller jump
          "38%": { transform: "translateY(-6px) scaleY(1.08) scaleX(0.94)" },
          // Land again
          "48%": { transform: "translateY(0) scaleY(0.94) scaleX(1.06)" },
          // Tiny bounce
          "58%": { transform: "translateY(-2px) scaleY(1.03) scaleX(0.98)" },
          // Settle with slight overshoot
          "70%": { transform: "translateY(1px) scaleY(0.98) scaleX(1.02)" },
          // Final settle
          "85%, 100%": { transform: "translateY(0) scaleY(1) scaleX(1)" },
        },
        "silly-bounce-away": {
          // Anticipation squash
          "0%": { transform: "translateY(0) scaleY(1) scaleX(1)", opacity: "1" },
          "10%": { transform: "translateY(3px) scaleY(0.85) scaleX(1.15)" },
          // Launch with stretch
          "25%": { transform: "translateY(-40px) scaleY(1.3) scaleX(0.8)", opacity: "1" },
          // Continue stretching upward
          "50%": { transform: "translateY(-150px) scaleY(1.4) scaleX(0.7)", opacity: "0.7" },
          // Fly away
          "100%": { transform: "translateY(-200vh) scaleY(2) scaleX(0.5)", opacity: "0" },
        },
        "silly-return": {
          // Enter stretched from below
          "0%": { transform: "translateY(200vh) scaleY(2) scaleX(0.5)", opacity: "0" },
          // Approaching with stretch
          "40%": { transform: "translateY(-30px) scaleY(1.2) scaleX(0.85)", opacity: "1" },
          // Overshoot and squash on landing
          "60%": { transform: "translateY(8px) scaleY(0.8) scaleX(1.2)" },
          // Bounce back up
          "75%": { transform: "translateY(-5px) scaleY(1.1) scaleX(0.92)" },
          // Small settle squash
          "88%": { transform: "translateY(2px) scaleY(0.96) scaleX(1.04)" },
          // Final rest
          "100%": { transform: "translateY(0) scaleY(1) scaleX(1)", opacity: "1" },
        },
        "logo-bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.08)" },
          "70%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "silly-shake": "silly-shake 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "silly-bounce-away": "silly-bounce-away 0.7s cubic-bezier(0.55, 0, 1, 0.45) forwards",
        "silly-return": "silly-return 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "logo-bounce-in": "logo-bounce-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
