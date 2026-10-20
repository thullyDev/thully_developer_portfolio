/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#0f1419",
          raised: "#161b22",
          card: "#1c2128",
        },
        accent: {
          DEFAULT: "#f472b6",
          muted: "#db2777",
        },
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(244, 114, 182, 0.35)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
