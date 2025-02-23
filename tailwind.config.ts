import type { Config } from 'tailwindcss'
const { heroui } = require('@heroui/react')

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config
