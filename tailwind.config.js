/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-page": "url('/images/landingpage.png')",
        watermark: "url('/images/bg.png')",
      },
    },
  },
  plugins: [],
};
