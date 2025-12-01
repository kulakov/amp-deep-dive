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
        display: ["Playfair Display", "serif"],
        body: ["Source Serif 4", "serif"],
        mono: ["JetBrains Mono", "monospace"],
        "silly-1": ["Caveat", "cursive"],
        "silly-2": ["Pacifico", "cursive"],
        "silly-3": ["Lobster", "cursive"],
        "silly-4": ["Comfortaa", "sans-serif"],
        "silly-5": ["Rubik Mono One", "sans-serif"],
        "silly-6": ["Press Start 2P", "monospace"],
        "silly-7": ["Pangolin", "cursive"],
        "silly-8": ["Marck Script", "cursive"],
        "silly-9": ["Russo One", "sans-serif"],
        "silly-10": ["Bad Script", "cursive"],
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
          "0%, 100%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(-8deg)" },
          "20%": { transform: "rotate(8deg)" },
          "30%": { transform: "rotate(-8deg)" },
          "40%": { transform: "rotate(8deg)" },
          "50%": { transform: "rotate(-4deg)" },
          "60%": { transform: "rotate(4deg)" },
          "70%": { transform: "rotate(0deg)" },
        },
        "silly-bounce-away": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "20%": { transform: "translateY(-30px) scale(1.1)" },
          "40%": { transform: "translateY(-10px) scale(1)" },
          "60%": { transform: "translateY(-50px) scale(1.05)" },
          "80%": { transform: "translateY(-200vh) scale(0.8)", opacity: "0.5" },
          "100%": { transform: "translateY(-200vh) scale(0.5)", opacity: "0" },
        },
        "silly-return": {
          "0%": { transform: "translateY(200vh) scale(0.5)", opacity: "0" },
          "60%": { transform: "translateY(-20px) scale(1.1)", opacity: "1" },
          "80%": { transform: "translateY(10px) scale(0.95)" },
          "100%": { transform: "translateY(0) scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "silly-shake": "silly-shake 0.6s ease-in-out",
        "silly-bounce-away": "silly-bounce-away 0.8s ease-in forwards",
        "silly-return": "silly-return 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
