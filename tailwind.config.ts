import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#ffda47',
        secondary: '#ff5c00',
        tertiary: '#c72d04',
        background: '#111',
      },
      fontFamily: {
        vt323: ['VT323', 'monospace'],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        '4': '4px', // Add custom border width
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        custom: '0 0 0.5rem var(--tw-shadow-color), 0 0 1rem var(--tw-shadow-color), 0 0 1.5rem var(--tw-shadow-color)',  // Add your custom shadow here
      },
    },
  },
    plugins: [
      plugin(function ({ matchUtilities, theme }: { matchUtilities: any, theme: any }) {
        matchUtilities(
          {
            'text-shadow': (value: any) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
        )
      }),
    ],
};
export default config;