import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        integral: ['"IntegralCF"', 'sans-serif'],
        Satoshi: ['"Satoshi"'],
      },
     colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          500: "#FBBF24",
        },
            
      },
    },
  },
  plugins: [],
} satisfies Config;
