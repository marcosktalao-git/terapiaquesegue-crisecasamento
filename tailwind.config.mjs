/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        base: '#FAF6F0',
        primary: '#1B4D3E',
        secondary: '#B85B35',
        surfaceAccent: '#F0EAE1',
        textPrimary: '#262322',
        textMuted: '#6E6A67',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
