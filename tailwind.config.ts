import type { Config } from 'tailwindcss'
const { heroui } = require('@heroui/react')

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [heroui()],
} satisfies Config
