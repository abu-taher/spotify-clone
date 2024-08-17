import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-color': 'linear-gradient(180deg, #3333a3, #121212)',
        'yellow-color': 'linear-gradient(180deg, #DEF628, #121212)',
      },
      colors: {
        darkgray: {
          "100": "#b3b3b3",
          "200": "#adadad",
          "300": "#a6a6a6",
          "400": "#999",
          "500": "#666666",
        },
        white: "#fff",
        gray: {
          "100": "#777",
          "200": "#757575",
          "300": "#282828",
          "400": "#181818",
          "500": "#121212",
          "600": "#070707",
          "700": "rgba(255, 255, 255, 0.6)",
          "800": "rgba(255, 255, 255, 0.1)",
          "900": "rgba(0, 0, 0, 0.8)",
          "1000": "rgba(255, 255, 255, 0.3)",
          "1100": "rgba(255, 255, 255, 0.04)",
          "1200": "rgba(255, 255, 255, 0.5)",
          "1300": "rgba(255, 255, 255, 0.2)",
          "1400": "rgba(255, 255, 255, 0.04)",
          "1500": "rgba(255, 255, 255, 0.08)",
          "1600": "rgba(255, 255, 255, 0.7)",
          "1700": "rgba(18, 18, 18, 0.3)",
          "1800": "hsla(0, 0%, 100%, .3)",
        },
        black: "#000",
        slateblue: {
          "100": "#604ec1",
          "200": "#3333a3",
        },
        gainsboro: "rgba(230, 230, 230, 0.3)",
        cornflowerblue: {
          "100": "#509bf5",
          "200": "#4793eb",
        },
        darkmagenta: "#af2896",
        chocolate: "#ba5d07",
        darkslateblue: {
          "100": "#876aa7",
          "200": "#1e3264",
        },
        paleturquoise: "#9cf0e1",
        green: "#179f09",
        mediumpurple: "#8d67ab",
        slategray: "#477d95",
        mediumvioletred: {
          "100": "#f037a5",
          "200": "#ca3489",
        },
        thistle: "#b09dc5",
        crimson: "#e8115b",
        seagreen: "#27856a",
        lightgreen: "#65d36e",
        dimgray: "#666",
      },
    },
  },
  plugins: [],
};
export default config;
