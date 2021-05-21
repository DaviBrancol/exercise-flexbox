module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  },
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
          100: '#CCEDFC',
          200: '#9CD6F9',
          300: '#68B5ED',
          400: '#4194DB',
          500: '#0D66C4',
          600: '#094FA8',
          700: '#063A8D',
          800: '#042971',
          900: '#021D5E',
        },
      },
    },
  },
  corePlugins: {},
  plugins: [],
}
