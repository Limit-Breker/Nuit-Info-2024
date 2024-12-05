/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    fontFamily: {
      'Lato': ['Lato', 'sans-serif'],
      'Mandali': ['Mandali', 'sans-serif'],
    },
    extend: {
      colors: {
        'light-blue': '#00AFF2',
        'normal-blue': '#0B6BBF',
        'dark-blue': '#0A2F62',
        'blue-gray': '#929BA8',
        'light-gray': '#BBBBBB',
        'dark-gray': '#777777',
      },
      borderRadius: {
        'jb': '1rem',
        'vb': '2rem',
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
