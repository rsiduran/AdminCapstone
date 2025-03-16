/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        meta: ['Matemasie', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        spacemono: ['SpaceMono', 'monospace'],
      },
    },
  },
  plugins: [],
};
