/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       screens: {
//         sm: "480px",
//         md: "738px",
//         lg: "976px",
//         xl: "1440px",
//       },
//       extend: {
//         colors: {
//           black: "hsl(0, 0%, 0%)",
//           lightGray: "hsl(0, 0%, 42%)",
//           veryLightGray: "hsl(0, 0%, 95%)",
//           green: "hsl(118, 71%, 31%)",
//         },
//         backgroundImage: {
//           headerImg: "url(../assets/Images/Bcg.jpg)",
//         },
//         height: {
//           imgHeaderHeight: "85vh",
//         },
//         borderRadius: {
//           radius: "40%",
//         },
//       },
//     },
//     plugins: ["prettier-plugin-tailwindcss"],
//   },
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "738px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        // Add your custom color scheme here
        black: "hsl(0, 0%, 0%)",
        lightGray: "hsl(0, 0%, 42%)",
        veryLightGray: "hsl(0, 0%, 95%)",
        green: "hsl(118, 71%, 31%)",
        // Add more colors as needed
      },
      fontFamily: {
        // Add your custom fonts here
        sans: ["Montserrat", "sans-serif"],
        // Add more font families as needed
      },
      backgroundImage: {
        // Add your custom background images here
        headerImg: "url(../assets/Images/Bcg.jpg)",
        // Add more background images as needed
      },
      height: {
        // Add your custom heights here
        imgHeaderHeight: "85vh",
        // Add more height values as needed
      },
      borderRadius: {
        // Add your custom border radius here
        radius: "40%",
        // Add more border radius values as needed
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
