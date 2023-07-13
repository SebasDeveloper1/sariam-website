/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'body-image': 'url("../public/party.jpg")',
        'thumbnail-green': 'url("../public/thumbnail_bg_green.webp")',
        'thumbnail-blue': 'url("../public/thumbnail_bg_blue.webp")',
        'thumbnail-orange': 'url("../public/thumbnail_bg_orange.webp")',
        'thumbnail-purple': 'url("../public/thumbnail_bg_purple.webp")',
        'thumbnail-red': 'url("../public/thumbnail_bg_red.webp")',
        'thumbnail-violet': 'url("../public/thumbnail_bg_violet.webp")',
        'thumbnail-yellow': 'url("../public/thumbnail_bg_yellow.webp")',
        'beams-home': 'url("../public/beams-home@95.webp")',
        'beams-cover': 'url("../public/beams-cover@95.webp")',
        'beams-cover2': 'url("../public/beams-cover2.jpg")',
        'dark-1': 'url("../public/gradient-dark-1.png")',
        'dark-2': 'url("../public/gradient-dark-2.png")',
        'dark-3': 'url("../public/gradient-dark-3.png")',
      },
    },
  },
  plugins: [],
};
