const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
      pink: colors.pink,
      'midnight': {
        100: '#667FB2',
        200: '#49659C',
        300: '#364C78',
        400: '#293959',
        500: '#1F2B43',
        600: '#182132',
        700: '#141A26',
        800: '#11151C',
        900: '#0B0F15',
      },
      'burgandy': {
        100: '#F5E3E0',
        200: '#EBD1CD',
        300: '#D5ABA4',
        400: '#C1877E',
        500: '#BA796E',
        600: '#B05D4F',
        700: '#954335',
        800: '#953424',
        900: '#8F2816',
      },
    },

    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      }
    },
    fontFamily: {
      Poppins: ['Poppins', 'cursive'],
      PoppinsBold: ['Poppins-Bold', 'cursive'],
      PoppinsThin: ['Poppins-Thin', 'cursive'],
      Inter: ['Inter', 'cursive'],
      InterBold: ['Inter-Bold', 'cursive'],
      InterThin: ['Inter-Thin', 'cursive'],
      GilroyLight: ['Gilroy-Light', 'cursive'],
      GilroyExtraBold: ['Gilroy-ExtraBold', 'cursive'],
      MonaSans: ['MonaSans'],
      MonaSansBold: ['MonaSansBold'],
      MonaSansExpanded: ['MonaSansExpanded'],
      MonaSansExpandedSemi: ['MonaSansExpandedSemi']
    },

  },
  plugins: [
    require('tailwindcss-bg-patterns'),

  ]
};
