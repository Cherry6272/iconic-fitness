/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050506', // Pure void black
          900: '#09090b', // Deep background
          850: '#121216', // Section container dark
          800: '#18181f', // Card dark fill
          700: '#24242e', // Elevated border
          600: '#343444', // Subtle stroke
        },
        accent: {
          DEFAULT: '#CCFF00', // Electric Acid Lime
          hover: '#DBFF33',
          glow: 'rgba(204, 255, 0, 0.25)',
          muted: '#8CAE00',
          dark: '#1F2900',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'slow-spin': 'spin 30s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(204, 255, 0, 0.2)', borderColor: 'rgba(204, 255, 0, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(204, 255, 0, 0.5)', borderColor: 'rgba(204, 255, 0, 0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(180deg, rgba(9,9,11,0.3) 0%, rgba(9,9,11,0.85) 70%, rgba(9,9,11,1) 100%)',
      }
    },
  },
  plugins: [],
}
