/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      height: {
        110: '30rem',
        128: '44rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
