/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: { 50: '#fff8ed', 100: '#fff0d4', 200: '#ffdda8', 300: '#ffc56e', 400: '#ffa033', 500: '#ff8a0c', 600: '#f07002', 700: '#c75304', 800: '#9e420c', 900: '#7f370d' },
        sacred: { 50: '#fdf8f0', 100: '#f9ecdb', 200: '#f2d6b5', 300: '#e8b986', 400: '#dd9654', 500: '#d47b34', 600: '#c46429', 700: '#a14d23', 800: '#823f23', 900: '#6c351f' },
        temple: { 50: '#fef9f3', 100: '#fdf0e2', 200: '#f9ddc4', 300: '#f4c49d', 400: '#eca36e', 500: '#e6884b', 600: '#d46d3a', 700: '#b1522e', 800: '#8e432a', 900: '#752f25' },
        // Named text/bg palette — replaces all arbitrary hex values
        parchment: {
          50:  '#f5ece0',  // brightest text (titles)
          100: '#f0e6d6',  // bright headings
          200: '#e8dcc8',  // body text base
          300: '#e0d5c3',  // normal headings
          400: '#ddd2c0',  // items text
          500: '#d4c8b5',  // scripture text
          600: '#d4c8b0',  // nav text
          700: '#cbc0ad',  // descriptions
          800: '#c4b8a4',  // hover text
          900: '#b5a890',  // step numbers
          950: '#b0a48f',  // subtle text
        },
        muted: {
          50:  '#9a8d7a',  // badges, secondary
          100: '#8a7d6b',  // faint UI
          200: '#7a6f60',  // very faint
          300: '#6a5f50',  // dots
          400: '#5a5040',  // chevrons
          500: '#3a342c',  // borders
        },
        surface: {
          900: '#0f0d0a',  // page bg
          800: '#12100d',  // nav bg
          700: '#141210',  // cards
          600: '#1a1714',  // card surface
          500: '#1e1b17',  // badges
          400: '#2a2520',  // borders, dividers
          300: '#352f28',  // hover
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        sanskrit: ['"Noto Serif Devanagari"', 'serif'],
      },
    },
  },
  plugins: [],
}
