/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ice: { DEFAULT: '#00AEEF', deep: '#0072A3', mist: '#D6F1FB' },
        ink: { DEFAULT: '#07101E', 2: '#0F172A', 3: '#1B2638' },
        frost: '#F2F7FA',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '84rem' },
    },
  },
  plugins: [],
};
