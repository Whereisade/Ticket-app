/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}', // <-- important for Next.js 13
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        JejuMyeongjo: ["Jeju Myeongjo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
