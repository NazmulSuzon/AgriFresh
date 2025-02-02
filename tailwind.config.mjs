/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/theming/themes")["light"],
          "primary": "#80B500",
          "secondary": "teal",
          "info": "#071C1F",

          ".btn-primary":{
            "color" : "#fff"
          },

          ".btn-outline.btn-primary:hover":{
            "color" : "#fff"
          }
        },
      },
      "cupcake",
      "light"
    ],
  },
};
