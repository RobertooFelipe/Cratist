/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        gray: {
          50: '#F0F0F0',
          100: '#E1DFE2',
          200: '#939393',
          300: '#6C6C6C',
          400: '#2B2B2B'
        },
        lightblue: {
          100: '#00E0FF'
        },
        yellow: { 800: '#FFB22B' },
        success: '#67A950',
        error: '#BE3737'
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      }
    }
  },
  plugins: []
}
