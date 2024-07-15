const { withTV } = require('tailwind-variants/transformer');

module.exports = withTV({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      branding: "#21CDA8",
      primary: '#33363B',
      accident: '#8B98A5',
      border: '#e5e7eb',
      dark: '#26282C'
    },
  },
  plugins: [],
});