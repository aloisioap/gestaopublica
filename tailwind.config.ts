import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tre: {
          navy: { DEFAULT: "#1E3A5F", deep: "#0B1B30", soft: "#E8EEF5" },
          gold: { DEFAULT: "#C8A415", soft: "#E4C65A", ink: "#6F5708" },
          green: { DEFAULT: "#00796B", ink: "#00574D" },
          terra: "#BF360C",
          info: "#1565C0",
          success: "#2E7D32",
          warn: { DEFAULT: "#F9A825", ink: "#7A4F00" },
          danger: { DEFAULT: "#C62828", ink: "#991B1B" },
        },
      },
      boxShadow: {
        glass: "inset 0 1px 0 0 rgb(255 255 255 / 0.7), 0 8px 32px -12px rgb(11 27 48 / 0.22)",
        "glass-lg": "inset 0 1px 0 0 rgb(255 255 255 / 0.7), 0 24px 60px -16px rgb(11 27 48 / 0.3)",
        "glow-gold": "0 10px 30px -8px rgb(200 164 21 / 0.55)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
