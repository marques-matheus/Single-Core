import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'sc': {
        100: '#68bef7',
        200: '#5baae8',
        300: '#1f9ff1',
        400: '#0474f2',
        500: '#045dbd',
        600: '#085eb1',
        700: '#0553c0',
        800: '#0E2E5A',
      },
    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
export default config;
