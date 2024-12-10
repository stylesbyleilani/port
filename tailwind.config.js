/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors:{
        "bac":'#222222',
        "tahiti":{
          100:" #fff3e2",
          200:" #faf3e1 ",
          300:" #f4f4f1",
          400:" #fbe2a9",
          500:" #f5e7c6",
          600:" #facab3",
          700:" #ff4f14",
          800:" #fff3e2",
          900:"#94eee3"
  
          
        }
      }
    },

  },
  plugins: [],
}

