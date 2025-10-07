/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'black-6': '#0F0E0D',
        'pantone-414': '#ADA495',
        'pantone-5455': '#D8D5CF',
        'pantone-000-soft': '#F1F0EC',
        'pantone-000-white': '#FFFFFF',
      },
    },
  },
  plugins: [
    require('flowbite')
  ],
};
