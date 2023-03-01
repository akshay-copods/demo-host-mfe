module.exports = {
  mode: 'jit',
  purge:['./src/**/*.{js,jsx,ts,tsx}',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors : {
        'geekblue':{
          100:'#f0f5ff',
          600:'#2f54eb'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
