/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".src/**/*.{js}", "*.html"],
  theme: {
    extend: {
      transitionProperty: {
        'top': 'top',
      },
      transitionDuration: {
        'default': '0.3s',
      },
      transitionTimingFunction: {
        'default': 'ease-in-out',
      },
    },
  },
  plugins: [],
}

