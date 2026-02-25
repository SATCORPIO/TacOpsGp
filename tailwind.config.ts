import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#050507",
        panel: "#0B0F14",
        gold: "#9F8750",
        alert: "#5E0B12",
        highlight: "#7A0C14",
        text: "#E5E7EB",
        muted: "#6B7280",
        success: "#1F5133",
      },
    },
  },
  plugins: [],
} satisfies Config;
