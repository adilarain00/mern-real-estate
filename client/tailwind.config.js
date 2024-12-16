import plugin from "@tailwindcss/line-clamp";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin, // Adjusted to use ES module import
  ],
};
