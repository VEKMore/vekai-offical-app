/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberBlack: '#0A0A0C',   // Custom dark mode canvas matrix
        cyberTeal: '#00FFCC',    // Action states and visual target indicators
        cyberPink: '#FF007F',    // Primary social export accents
      },
    },
  },
  plugins: [],
}
