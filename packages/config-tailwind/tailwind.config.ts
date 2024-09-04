import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
  theme: {
    extend: {
      backgroundImage: {
        'glow-conic':
          'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)'
      },
      colors: {
        primary: {
          DEFAULT: '#8548EA', // Usando indigo-500 como color primario por defecto
          light: '#C2A3F4', // Usando indigo-400 para una versión más clara
          dark: '#21123A' // Usando indigo-600 para una versión más oscura
        },
        secondary: {
          DEFAULT: '#f05252', // Usando coral-500 como color secundario por defecto
          light: '#f8b4b4', // Usando coral-300 para una versión más clara
          dark: '#e02424' // Usando coral-600 para una versión más oscura
        },
        error: {
          DEFAULT: '#e74694', // Usando cerise-500 como color de error por defecto
          light: '#f8b4d9', // Usando cerise-300 para una versión más clara
          dark: '#d61f69' // Usando cerise-600 para una versión más oscura
        },
        warning: {
          DEFAULT: '#ff5a1f', // Usando pumpkin-500 como color de advertencia por defecto
          light: '#fdba8c', // Usando pumpkin-300 para una versión más clara
          dark: '#d03801' // Usando pumpkin-600 para una versión más oscura
        },
        success: {
          DEFAULT: '#01BD4C', // Usando turquoise-500 como color de éxito por defecto
          light: '#BFEED2', // Usando turquoise-300 para una versión más clara
          dark: '#00973C' // Usando turquoise-600 para una versión más oscura
        },
        info: {
          DEFAULT: '#3f83f8', // Usando azure-500 como color de información por defecto
          light: '#a4cafe', // Usando azure-300 para una versión más clara
          dark: '#1c64f2' // Usando azure-600 para una versión más oscura
        },
        purple: {
          '100': '#E0D1F9',
          '200': '#C2A3F4',
          '300': '#A375EF',
          '400': '#9D6CEE',
          '500': '#8548EA',
          '600': '#422475',
          '700': '#21123A'
        },
        green: {
          '100': '#E5F8ED',
          '200': '#BFEED2',
          '300': '#99E4B7',
          '400': '#66D793',
          '500': '#33CA6F',
          '600': '#01BD4C',
          '700': '#00973C'
        }
      }
    }
  },
  plugins: []
};
export default config;
