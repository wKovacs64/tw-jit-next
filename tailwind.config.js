const tailwindForms = require('@tailwindcss/forms');

module.exports = {
  darkMode: false,
  plugins: [tailwindForms],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
};
