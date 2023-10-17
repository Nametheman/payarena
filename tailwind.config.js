/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#475467",
      gray: "#8492a6",
      "gray-light": "#F2F2F2",
      white: "#ffffff",
      black: "#000000",
      accent1: "#F58220",
      accent2: "#009BFF",
      footer: "#181C42",
      footerHead: "#02ACEB",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      "manrope-bold": ["Manrope-Bold", "sans-serif"],
      "generalsans-regular": ["GeneralSans-Regular", "sans-serif"],
      "generalsans-light": ["GeneralSans-Light", "sans-serif"],
      "generalsans-medium": ["GeneralSans-Medium", "sans-serif"],
      "generalsans-semiBold": ["GeneralSans-SemiBold", "sans-serif"],
      "generalsans-extralight": ["GeneralSans-ExtraLight", "sans-serif"],
      roboto: ["Roboto-Bold", "sans-serif"],
      "roboto-medium": ["Roboto-Medium", "sans-serif"],
      "roboto-regular": ["Roboto-Regular", "sans-serif"],
    },
    // fontSize: {
    //   "0.8rem": "0.8rem",
    // },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      colors: {
        subscribe: "linear-gradient(180deg, #0293F1 0%, #56BDFF 100%)",
      },

      boxShadow: {
        "small-left": "-4px 0px 12px 0px rgba(0,0,0,0.3)",
        card: "0px 0px 14px 1px rgba(0,0,0,0.1)",
        "contact-form": "0px 6px 12px 0px #14142B0A",
        "get-started": "0px 4px 20px 0px #00000059",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/about-patterns.svg')",
      },
    },
  },
  plugins: [],
};
