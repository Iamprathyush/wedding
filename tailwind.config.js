/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        butter: {
          50: '#FFFDF5',
          100: '#FFF9E6',
          200: '#FFF3CD',
          300: '#FFEDB4',
          400: '#FFE79B',
          500: '#FFE182', // Main butter yellow
          600: '#FFD94F',
          700: '#FFD11C',
          800: '#E6B800',
          900: '#B38F00',
        },
        cream: {
          50: '#FFFFFE',
          100: '#FEFEF7',
          200: '#FDFDF0',
          300: '#FCFCE8',
          400: '#FBFBE1',
          500: '#FAFAD9',
        },
        elegant: {
          light: '#F5F0E6',
          DEFAULT: '#2C1810',
          dark: '#1A0F0A',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}