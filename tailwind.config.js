module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#22c55e",
          "secondary": "#22d3ee",
          "accent": "#4338ca",
          "neutral": "#c4b5fd",
          "base-100": "#f3f4f6",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#e11d48",
        },

      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],

}
