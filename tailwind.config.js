/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "calc(var(--vh, 1vh) * 100)",
      },
      transitionProperty: {
        height: "height",
        "max-height": "max-height",
      },
      screens: {
        phone: "375px",
        desktop: "960px",
      },
      dropShadow: {
        blow: "0 0 10px #3bdbe7, 0 0 20px #3bdbe7, 0 0 20px #3bdbe7, 0 0 30px #3bdbe7",
        green:
          "5px 0 10px #3dce95,-5px 0 10px #3dce95, 10px 0 20px #3dce95, -10px 0 20px #3dce95, 0 0 30px #3dce95",
      },
      boxShadow: {
        neumorphic:
          "rgb(189, 255, 241) 0px 0px 20px 0px, rgb(189, 255, 241) 0px 0px 10px 0px inset",
        bright:
          "rgb(255, 173, 144) 0px 0px 70px 4px,rgb(255, 173, 144) 0px 0px 10px 0px inset",
        blue: "#2c60ab 0px 0px 30px 0px, #2c60ab 0px 0px 20px 0px",
        yallow: "#ffdf00 0px 0px 30px 0px, #ffdf00 0px 0px 20px 0px",
        red: "rgb(220,20,60) 0px 0px 20px 0px, rgb(220,20,60) 0px 0px 10px 0px inset",
      },
      animation: {
        skeleton: "skeleton 3s infinite",
        toastFadeIn: "toastFadeInSide 0.3s ease-in-out",
        toastFadeOut: "toastFadeOutSide 0.3s ease-in-out",
        callFadeIn: "callFadeIn 1.5s ease-in-out",
        FadeIn: "FadeIn 0.5s ease-in-out",
        OpacityFadeIn: "OpacityFadeIn 2s ease-in-out",
        OpacityFadeOut: "OpacityFadeOut 1s ease-in-out",
        PhoneCallRing: "PhoneCallRing 1.5s ease-in-out infinite",
        callIconCircle: "callCircle 1.5s linear infinite",
        spinCircle: "spin 4s linear infinite",
        spinUnCircle: "spinUn 2s linear infinite",
        scaleOpen: "open 1s ease-in-out",
        starTwinkle: "starTwinkle 1s ease-in-out infinite",
        tag: "tag 2s infinite",
      },
      keyframes: {
        skeleton: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        open: {
          "0%": {
            height: "0px",
          },
          "100%": {
            height: "500px",
          },
        },
        callFadeIn: {
          "0%": { right: "-200px" },
          "100%": { right: "0px" },
        },
        OpacityFadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        OpacityFadeOut: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        FadeIn: {
          "0%": {
            opacity: 0.5,
            transform: "translateX(-100px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        PhoneCallRing: {
          "0%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(-15deg)" },
        },
        callCircle: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "50%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(1.2)", opacity: 0 },
        },
        toastFadeInSide: {
          "0%": {
            opacity: 0,
            transform: "translateY(-15px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        toastFadeOutSide: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-15px)",
          },
        },
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        spinUn: {
          to: {
            transform: "rotate(-360deg)",
          },
        },
        starTwinkle: {
          "0%": {
            transform: "scale(0.3)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(0.5)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(0.5)",
            opacity: 0,
          },
        },
        tag: {
          "0%": {
            transform: "scale(0.8)",
          },
          "70%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0.8)",
          },
        },
      },
      fontFamily: {
        Tektur: ["Tektur", "sans-serif"],
        Baloo: ['"Baloo Thambi 2"', "sans-serif"],
        Russo: ['"Russo One"', "sans-serif"],
      },
    },
  },
  blocklist: ["container"],
  plugins: [],
};
