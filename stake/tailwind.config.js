/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all your source files
    "./public/index.html", // Add this if using a static HTML template
  ],
  theme: {
    extend: {
      colors: {
        "grey-400": "#B0B0B0", // Custom gray color
      },
      spacing: {
        "18px": "18px", // Custom spacing for gap
        "664px": "664px", // Custom height
        "275px": "275px", // Custom row height
        "300px": "300px", // Custom small screen height
      },
      gridTemplateRows: {
        "275px-275px": "275px 275px", // Custom grid rows
      },
      gridTemplateColumns: {
        "calc-cols": "calc(50% - 9px) calc(50% - 9px)", // Custom grid columns
      },
      transitionDelay: {
        100: "100ms", // Custom transition delay
      },
      transitionProperty: {
        all: "all", // Ensure all properties are transitionable
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.4, 0, 0.2, 1)", // Custom timing function
      },
      transitionDuration: {
        150: "150ms", // Default transition duration
      },
    },
    screens: {
      sm: "640px",
      md: "768px", // Breakpoint for medium screens
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // Adds the scrollbar plugin
  ],
};
