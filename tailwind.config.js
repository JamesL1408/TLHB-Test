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
        '900pixels' : '900px',
        '500pixels' : '500px',
        '640pixels' : '640px',
        '870pixels' : '870px',
        '1200pixels' : '1200px',
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
