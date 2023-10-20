/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: 'Montserrat',
        Raleway: 'Raleway',
      },
      fontSize: {
        xs: ['0.75rem',{          
          lineHeight: "18px",
          fontWeight: "400"
        }], //12px
        sm: ['0.875rem',{
          lineHeight: "20px",
          fontWeight: "600"
        }], //14px
        base: ['1rem',{
          lineHeight: "24px",
          fontWeight: "400"
        }], //16px
        lg: ['1rem',{
          lineHeight: "19.5px",
          fontWeight: "700"
        }], //16px
        xl: ['1.25rem',{
          lineHeight: "28px",
          fontWeight: "800"
        }], //20px
        "2xl": ['1.5rem',{
          lineHeight: "38px",
          fontWeight: "400"
        }], //24px
        "3xl": ['2.125rem',{
          lineHeight: "44.2px",
          fontWeight: "700"
        }], //34px
        "4xl": ['3.75rem',{
          lineHeight: "73.14px",
          fontWeight: "400"
        }], //60px
      },
      colors: {
        primary: '#5B99B3',
        secondary: '#FC5252',
        light: '#FFFFFF',
        dark: '#222222',
        lightRed: '#FFA3A3',
      },
    },
  },
  plugins: [],
};

