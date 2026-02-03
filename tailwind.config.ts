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
        'jkkn-green': '#1e7f4e',
        'jkkn-orange': '#ff6b35',
        'jkkn-blue': '#0d5a7d',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
      fontSize: {
        'responsive-xs': ['clamp(0.75rem, 2vw, 0.875rem)', { lineHeight: '1.5' }],
        'responsive-sm': ['clamp(0.875rem, 2.5vw, 1rem)', { lineHeight: '1.5' }],
        'responsive-base': ['clamp(1rem, 2.5vw, 1.125rem)', { lineHeight: '1.6' }],
        'responsive-lg': ['clamp(1.125rem, 3vw, 1.25rem)', { lineHeight: '1.6' }],
        'responsive-xl': ['clamp(1.25rem, 3.5vw, 1.5rem)', { lineHeight: '1.4' }],
        'responsive-2xl': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.3' }],
        'responsive-3xl': ['clamp(1.875rem, 5vw, 3rem)', { lineHeight: '1.2' }],
        'responsive-4xl': ['clamp(2.25rem, 6vw, 3.75rem)', { lineHeight: '1.1' }],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
};
export default config;
