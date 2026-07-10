/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — deep teal (calm, trustworthy, clinical-but-warm).
        // Base tone lives around 700; leans slightly blue to coexist with the indigo-blue brand logo.
        primary: {
          50: '#f1f7f6',
          100: '#dbeae7',
          200: '#b8d5d0',
          300: '#8ab8b1',
          400: '#5a958d',
          500: '#3c776f',
          600: '#2c5f58',
          700: '#1f4b47',
          800: '#193c39',
          900: '#153230',
          950: '#0a1a19',
        },
        // Accent — warm terracotta (human warmth). Used sparingly for CTAs / highlights.
        accent: {
          50: '#fdf5f0',
          100: '#fae8dc',
          200: '#f4cdb5',
          300: '#edac85',
          400: '#e58f5f',
          500: '#d9764a',
          600: '#c25e37',
          700: '#a1492c',
          800: '#813c28',
          900: '#6a3324',
          950: '#391910',
        },
        // Paper — warm off-white surfaces (replaces clinical pure white / gray-50).
        paper: {
          DEFAULT: '#faf6f0',
          50: '#fffdf9',
          100: '#faf6f0',
          200: '#f2ebe0',
          300: '#e7dccc',
          400: '#d8c9b3',
        },
        // Ink — warm near-black text + soft warm gray for secondary copy.
        ink: {
          DEFAULT: '#232323',
          soft: '#6b6560',
          muted: '#928b83',
        },
      },
      fontFamily: {
        // Display serif for headings; body/UI keep the existing system sans stack.
        display: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
