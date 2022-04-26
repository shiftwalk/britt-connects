module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Suisse Intl', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
      'display': ['Canela', 'Arial', 'sans-serif'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000000',
        'off-black': '#2E2B16',
        'white': '#FFF',
        'yellow': {
          light: '#ffb288',
          DEFAULT: '#DEE212',
          dark: '#555418',
        },
      }
    },
  },
  plugins: []
}