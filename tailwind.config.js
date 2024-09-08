/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      'header-gray': '#1E1E1D',
      'text-colour': '#FFFFFF',
      'off-text-colour': '#C4C4C4',
      'background' : '#161513',
      'white-background': '#F9FAFB',
      'black-text': '#111827',
      'off-black': '#4B5563',
    }
  },
  plugins: [],
}

