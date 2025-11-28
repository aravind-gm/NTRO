import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#000000",
          800: "#0a0a0a",
          700: "#151515",
          600: "#1a1a1a",
        },
        neon: {
          cyan: "#00d9ff",
          pink: "#ff00ff",
          purple: "#9d4edd",
          blue: "#3a86ff",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-neon":
          "linear-gradient(135deg, #00d9ff 0%, #9d4edd 50%, #ff00ff 100%)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        typewriter: "typewriter 3.5s steps(40, end)",
        blink: "blink 1s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px #00d9ff" },
          "50%": { boxShadow: "0 0 40px #00d9ff" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        typewriter: {
          to: { left: "100%" },
        },
        blink: {
          to: { borderColor: "transparent" },
        },
      },
      boxShadow: {
        neon: "0 0 30px rgba(0, 217, 255, 0.5)",
        "neon-pink": "0 0 30px rgba(255, 0, 255, 0.5)",
        glow: "0 0 20px rgba(157, 78, 221, 0.3)",
      },
      backdropFilter: {
        glass: "blur(10px) brightness(0.95)",
      },
    },
  },
  plugins: [],
};
export default config;
