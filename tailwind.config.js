/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /hover:text-\[[^]]+\]/,
      variants: ["hover"],
    },
    "text-[#f16529]",
    "text-[#2994f1]",
    "text-[#f1cf29]",
    "text-[#29c6f1]",
    "text-[#29f1e0]",
    "text-[#dbdad6]",
    "text-[#16a394]",
    "text-[#ffa611]",
    "text-[#30f129]",
    "text-[#f18329]",
    "text-[#f1cf29]",
    "text-[#296cf1]",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 7s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          to: { "background-position": "200% center" },
        },
      },
    },
  },
  plugins: [],
};
