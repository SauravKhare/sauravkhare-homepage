import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
        'OPTI': ['OPTI', 'sans-serif']
      },
      colors: {
        'dark': 'hsla(0, 0%, 100%, .125)',
      },
      width: {
        '55ch': '55ch'
      }
    },
  },
  plugins: [],
}
export default config
