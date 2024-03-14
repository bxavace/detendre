const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#dddee0',
          300: '#CCCDD0',
          400: '#ABACB2',
          500: '#9A9CA2',
          600: '#898B93',
          700: '#787A83',
          800: '#676A74',
          900: '#575A65'
        }
      }
    }
  }
};

module.exports = config;