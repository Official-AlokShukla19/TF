/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          parchment: "#E8D9C5",
          paper: "#F4EBD0",
          ink: "#3E2723",
          gold: "#B8860B",
          mustard: "#C5A059",
          burntOrange: "#8B4513",
          terracotta: "#A0522D",
          maroon: "#4A0E0E",
          sepia: "#704214",
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        body: ["'Lora'", "serif"],
      },
      backgroundImage: {
        'parchment-texture': "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        'noise': "url('https://www.transparenttextures.com/patterns/stardust.png')",
      },
      animation: {
        'page-turn': 'pageTurn 1s ease-in-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        pageTurn: {
          '0%': { transform: 'rotateY(0deg)', transformOrigin: 'left' },
          '100%': { transform: 'rotateY(-180deg)', transformOrigin: 'left' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
