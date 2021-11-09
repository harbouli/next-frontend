module.exports = {
  
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
        '17': '5rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
