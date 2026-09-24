import type { Config } from 'tailwindcss';

// Colours were matched by eye from the design — tweak the tokens here.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9EE',
        ink: '#1A0B33',
        purple: { DEFAULT: '#2B0A61', light: '#3B1783' },
        orange: '#FF5A14',
        sun: { DEFAULT: '#FFF0A3', line: '#F4D648' },
        night: '#150626',
      },
      fontFamily: { sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
export default config;
