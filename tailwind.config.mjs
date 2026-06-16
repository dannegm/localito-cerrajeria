import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
        heading: ['Outfit', ...defaultTheme.fontFamily.sans],
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        base: '#FFFFFF',
        surface: '#F7F8FC',
        elevated: '#ECEEF5',
        border: 'rgba(0,0,0,0.09)',
        brand: '#FBBB24',
        navy: '#183657',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(ellipse 80% 45% at 50% -5%, rgba(251,187,36,0.20) 0%, transparent 65%)',
        'card-shine':
          'linear-gradient(135deg, rgba(251,187,36,0.05) 0%, transparent 60%)',
      },
    },
  },
  plugins: [],
}
