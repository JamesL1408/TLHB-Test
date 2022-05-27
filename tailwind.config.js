module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'Classy' : '#D7C49EFF',
        'Jet' : '#2D2E2E',
        'LimeGreen' : '#32CD32',
      },
      screens: {
        '730pixels' : '730px',
        '770pixels' : '770px',
        '900pixels' : '900px'
      },
      fontFamily:{
        Courgette : "'Courgette',cursive",
        Roboto : "'Roboto', sans-serif",
        Satisfy : "'Satisfy', scursive",
      },
    },
  },
  plugins: [],
}
