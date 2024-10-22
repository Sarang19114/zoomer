import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#181A24',  // Dark slate for primary background
          2: '#0F111B',  // Rich black for secondary sections
          3: '#21232D',  // Charcoal for borders or cards
          4: '#1D2026',  // Deep charcoal for depth
        },
        blue: {
          1: '#007BFF',  // Bright blue for buttons or highlights
        },
        sky: {
          1: '#81E3FF',  // Light teal for light backgrounds
          2: '#B3E8FF',  // Soft teal for subtle backgrounds
          3: '#E3FAFF',  // Very light teal for container backgrounds
        },
        orange: {
          1: '#FF6B00',  // Vivid orange for warnings or active buttons
        },
        purple: {
          1: '#6F42C1',  // Bright purple for accents or icons
        },
        yellow: {
          1: '#FFC107',  // Bright yellow for highlights or attention-grabbing elements
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
