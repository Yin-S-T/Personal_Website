/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pitch: '#0F1419',
        neon: '#00FF41',
        gold: '#FFD700',
        cyber: '#1A1F2E',
      },
      boxShadow: {
        neon: '0 0 10px rgba(0, 255, 65, 0.6), 0 0 20px rgba(0, 255, 65, 0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(0,255,65,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.12) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
