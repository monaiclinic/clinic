/** @type {import('tailwindcss').Config} */
export default {

  theme: {
    screens: {
      'xs': '320px',    // Celulares muito pequenos
      'sm': '640px',    // Celulares grandes / Tablets pequenos
      'md': '768px',    // Tablets
      'lg': '1024px',   // Laptops
      'xl': '1280px',   // Desktops
      '2xl': '1536px',  // Monitores grandes
      '3xl': '1920px',  // Full HD
      '4xl': '2560px',  // 2K / QHD
      '5xl': '3840px',  // 4K / UHD
    },
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
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ]
};
