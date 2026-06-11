/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#f2f2f2',
          DEFAULT: '#1c1c1c',
          dark: '#000000',
        },
        text: {
          light: '#f2f2f2',
          DEFAULT: '#e0e0e0',
          muted: '#757575',
          dark: '#1f2020',
        },
        primary: {
          DEFAULT: '#3f51b5',
          hover: '#303f9f',
        },
        overlay: {
          dark: 'rgba(31, 32, 32, 0.7)',
          light: 'rgba(255, 255, 255, 0.5)',
        }
      },
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://lh3.googleusercontent.com/sitesv/AA5AbUDt39BNJgBWxHNQvrqF_PnoUlcfxED_EkIrBXmnH5y0M5UxwYv6SCnz9SIgDM1SlkgcyEFgT6uWoMkTi16H6zYYKPt4tCd-EpYCf6roi_wXRaioH3Wubjr_Se3w9liRl0iwhsj_QaEGmiYDGS1Q-F3DgBH9cEhRwSE07hKqZI6CbvtQ5IWclzgiaTu9kkA=w16383')"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(63, 81, 181, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(63, 81, 181, 0.7)' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s infinite',
      }
    },
  },
  plugins: [],
}
