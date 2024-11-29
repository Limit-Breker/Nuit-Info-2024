/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    fontFamily: {
      'Laila': ['Laila', 'sans-serif'],
      'Krub': ['Krub', 'sans-serif'],
    },
    extend: {
      colors: {
        'green-button': '#81DD7C',
        'green-hover': '#50D949',
        'green-border': '#52D54B',
        'green-focus': '#52D54B',

        'red-button': '#FA6B6E',
        'red-hover': '#E4393C',
        'red-border': '#CA393C',
        'red-focus': '#CA393C',

        'brown-button': '#DFAA99',
        'brown-hover': '#FFC8B7',
        'brown-border': '#8E6255',
        'brown-focus': '#8E6255',

        'dark-button': '#142414',
        'dark-hover': '#142414',
        'dark-border': '#142414',
        'dark-focus': '#142414',

        'input-bg': '#d0e5ff',
        'input-border': '#5b69ff',

        'main-green': '#75A775',
        'main-dark': '#142414',

        'presentiel': '#8CDC8C !important',
        'hybride': '#D4D77F !important',
        'tout': '#8D8E58 !important',
        'distanciel': '#DFAA99 !important',

        'background': '#EDFFED',
        
        'font-color': '#BDFF99',

        'merde': '#7B522E'
      },
      borderRadius: {
        'jb': '1rem',
        'vb': '2rem',
      },
      minHeight: {
        '90p': '90vh',
        '10p': '10vh',
      },
      maxHeight: {
        '90p': '90vh',
        '10p': '10vh',
      },
      height: {
        '90p': '90vh',
        '85p': '85vh',
        '10p': '10vh',
        '5p': '5vh',
      },
      width: {
        '95p': '95%'
      },
    },
  },
  plugins: [],
}
