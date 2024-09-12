import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(50% 50% at 50% 50%, #EE202E 0%, #FFFFFF 100%)',
        'custom-radial-2': 'radial-gradient(circle, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4))',
      },
      screens: {
        'sm': '391px',
      }
    },
  },
  plugins: [],
};
export default config;
