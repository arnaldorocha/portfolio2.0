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
        accentSoft: '#2F4B8D',
        // Premium additions
        'dark-bg': '#0A0E1A',
        'dark-card': '#0F1420',
        'dark-border': '#1A2235'
      },
      boxShadow: {
        glow: '0 20px 80px rgba(15, 23, 42, 0.35)',
        soft: '0 18px 55px rgba(8, 15, 28, 0.22)',
        // Premium shadows
        'glow-blue': '0 20px 60px rgba(59, 130, 246, 0.2)',
        'glow-purple': '0 20px 60px rgba(168, 85, 247, 0.2)',
        'premium': '0 25px 70px rgba(0, 0, 0, 0.3)'
      },
      backgroundImage: {
        'soft-grid': 'radial-gradient(circle at top, rgba(143, 176, 255, 0.12), transparent 32%), radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.05), transparent 25%)',
        // Premium gradients
        'gradient-hero': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 100%)'
      },
      backdropBlur: {
        'xs': '2px'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite'
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
