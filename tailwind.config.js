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
          parchment: "#F4F1EA",
          paper: "#FCFBF7",
          ink: "#2D2926",
          gold: "#D4AF37",
          mustard: "#E3B448",
          burntOrange: "#BF5700",
          terracotta: "#E2725B",
          clay: "#A0522D",
          indigo: "#1A237E",
          midnight: "#0D1117",
          maroon: "#800000",
          olive: "#556B2F",
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
