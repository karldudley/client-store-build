/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './locales/*.json',
    './assets/*.liquid',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
