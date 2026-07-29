/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberBlack: '#090A0F',
        cyberSurface: '#0B0D16',
        cyberPanel: '#10131F',
        cyberPanelSoft: '#141827',
        cyberBorder: '#1F2233',
        cyberWhite: '#F5F5F7',
        cyberGray: '#8E94A3',
        cyberGrayMuted: '#4D5570',
        cyberPurple: '#7B3FFF',
        cyberPurpleSoft: '#9562FF',
        cyberTeal: '#00FFCC',
        cyberYellow: '#FFCC00',
        cyberPanelDeep: '#0D1120',
        cyberPanelShade: '#1A1D2E',
        cyberPurpleLight: '#B2A8FF',
        cyberPurpleMuted: '#BFB8FF',
        cyberYellowSoft: '#FFE75A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 20px 60px -50px rgba(0, 0, 0, 0.8)',
        glow: '0 30px 80px -70px rgba(0, 0, 0, 0.8)',
        'glow-md': '0 30px 80px -60px rgba(0, 0, 0, 0.8)',
        'glow-lg': '0 40px 120px -80px rgba(0, 0, 0, 0.8)',
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        '3xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.03em',
        wide: '0.2em',
        'wide-md': '0.22em',
        wider: '0.25em',
        mega: '0.3em',
        'mega-xl': '0.35em',
      },
    },
  },
  plugins: [],
}
