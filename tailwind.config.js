/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'sfprimary': '#2d2926',
      'sfsecondary': '#c8102e',
      // --fontColor: #35373a;
      'sfprimary2': '#97999b',
      'sfsecondary2': '#eca154',
      // --primaryColor3: #bbbcbc;
      // --secondaryColor3: #c6aa76;
    },
  },
   plugins: [require("tw-elements/dist/plugin.cjs")],
}
// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
// module.exports = {
//   content: [
//     "./src/**/*.{html,js}",
//     "./node_modules/tw-elements/dist/js/**/*.js"
//   ],
//   plugins: [require("tw-elements/dist/plugin.cjs")],
//   darkMode: "class"
// };