/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         screens: {
            '2xs': '360px',
            xs: '480px',
            '2md': '850px',
            '3xl': '1700px',
         },
         keyframes: {
            'fade-in': {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' },
            },
            'fade-in-from-right': {
               '0%': {
                  opacity: '0',
                  position: 'relative',
                  transform: 'translateX(20%)',
               },
               '100%': {
                  opacity: '1',
                  position: 'relative',
                  transform: 'translateX(0)',
               },
            },
            'fade-in-from-left': {
               '0%': {
                  opacity: '0',
                  position: 'relative',
                  transform: 'translateX(-20%)',
               },
               '100%': {
                  opacity: '1',
                  position: 'relative',
                  transform: 'translateX(0)',
               },
            },
         },
         animation: {
            fadeIn: 'fade-in 0.3s ease-out forwards',
            fadeInFromRight: 'fade-in-from-right 0.7s ease-out forwards',
            fadeInFromLeft: 'fade-in-from-left 0.7s ease-out forwards',
         },
         spacing: {
            custom4xl: '20rem',
            custom3xl: '17rem',
            custom2xl: '15rem',
            customXl: '13rem',
            customLg: '11rem',
            custom3md: '9rem',
            custom2md: '7.5rem',
            customMd: '6rem',
            customSm: '4.2rem',
            customXs: '2.85rem',
            custom2xs: '1.7rem',
            custom3xs: '0.8rem',
         },
         boxShadow: {
            large: '0 10px 60px -10px rgba(0,0,0,0.25)',
            medium: '0 5px 40px -5px rgba(0,0,0,0.25)',
            small: '0 3px 20px -3px rgba(0,0,0,0.2)',
         },
         transitionDuration: {
            default: '150ms',
         },
         colors: {
            primary: '#31C48D',
            primaryDark: '#279d71',
            primaryLight: '#5ad0a4',
            primaryLightest: '#d6f3e8',
            textPrimary: '#1C1B1B',
            textMediumLight: '#1c1b1bcc',
            textLight: '#1c1b1b99',
            lightGray: '#f5f5f5',
            blackLight: '#111',
         },

         borderRadius: {
            default: '8px',
            defaultLg: '16px',
         },
      },
   },
   plugins: [],
};
