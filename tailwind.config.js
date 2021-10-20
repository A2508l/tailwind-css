module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navCol: 
        {
          50: '#f5edfd',
          100: '#d8cfe5',
          200: '#2B3148',
          300: '#a391ba',
          400: '#8872a6',
          500: '#6f588c',
          600: '#56456e',
          700: '#3e314f',
          800: '#261c31',
          900: '#0e0817',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
