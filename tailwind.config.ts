import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0B0B12',
        violet: '#7C3AED',
        royal: '#0B28FF',
        lime: '#C7FF3F',
        mint: '#39D98A',
        soft: '#F5F7FA',
        slate: '#8A90A2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pixel: ['VT323', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(199,255,63,0.25), 0 0 20px rgba(11,40,255,0.15)'
      },
      backgroundImage: {
        grid: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '24px 24px',
      }
    },
  },
  plugins: [],
};

export default config;


