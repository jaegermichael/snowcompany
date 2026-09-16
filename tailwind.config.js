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
      fontFamily: { sans: ['Manrope', 'sans-serif'] },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-delay-1': 'slideUp 0.6s ease-out 0.1s forwards',
        'slide-up-delay-2': 'slideUp 0.6s ease-out 0.2s forwards',
        'slide-up-delay-3': 'slideUp 0.6s ease-out 0.3s forwards',
        'slide-up-delay-4': 'slideUp 0.6s ease-out 0.4s forwards',
        'slide-up-delay-5': 'slideUp 0.6s ease-out 0.5s forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-wa': 'pulseWA 2s infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseWA: { '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.5)' }, '70%': { boxShadow: '0 0 0 14px rgba(37,211,102,0)' }, '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' } },
      },
    },
  },
  plugins: [],
}
