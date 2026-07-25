/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ice: { DEFAULT: '#00AEEF', dark: '#0090C5', light: '#E0F7FF' },
        navy: { DEFAULT: '#0F172A', light: '#1E293B', muted: '#334155' },
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-wa': 'pulseWA 2s infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        pulseWA: { '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.5)' }, '70%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' } },
      },
    },
  },
  plugins: [],
}