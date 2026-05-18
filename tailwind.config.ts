import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        surface: '#0B0E14',
        surface2: '#111821',
        border: '#1F2937',
        muted: '#8B95A1',
        accent: '#8FB0FF',
        accentSoft: '#2F4B8D'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(15, 23, 42, 0.35)',
        soft: '0 18px 55px rgba(8, 15, 28, 0.22)'
      },
      backgroundImage: {
        'soft-grid': 'radial-gradient(circle at top, rgba(143, 176, 255, 0.12), transparent 32%), radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.05), transparent 25%)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
