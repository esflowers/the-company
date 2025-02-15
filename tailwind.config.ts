import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
					'50': '#fafafa',
					'100': '#f3f4f4',
					'200': '#e3e4e4',
					'300': '#d3d4d4',
					'400': '#a3a4a4',
					'500': '#737474',
					'600': '#535454',
					'700': '#3a3a3a',
					'800': '#232323',
					'900': '#131414',
					'950': '#030404', //
				},
        'dev': {
          '50': '#f5f0ff',
          '100': '#ede4ff',
          '200': '#ddcdff',
          '300': '#c5a6ff',
          '400': '#aa73ff',
          '500': '#943bff',
          '600': '#8c14ff',
          '700': '#7a00f4', //
          '800': '#6b01d6',
          '900': '#5903af',
          '950': '#360077',
        },
        'mark': {
          '50': '#fff0f2',
          '100': '#ffdee2',
          '200': '#ffc2c9',
          '300': '#ff97a3',
          '400': '#ff5c6e',
          '500': '#ff2941',
          '600': '#f90924',
          '700': '#cf031a', //
          '800': '#ad071a',
          '900': '#8f0d1c',
          '950': '#4e010a',
        },
        'edu': {
          '50': '#e8f3ff',
          '100': '#d5e8ff',
          '200': '#b3d2ff',
          '300': '#85b2ff',
          '400': '#5684ff',
          '500': '#2f56ff',
          '600': '#0c22ff',
          '700': '#0014f4', //
          '800': '#0619cd',
          '900': '#10219f',
          '950': '#0a125c',
        },
      },
      fontFamily: {
        brand: ["var(--brand)", 'system-ui', 'sans-serif'],
        sans: ["var(--sans)", 'system-ui', 'sans-serif'],
        mono: ["var(--mono)", 'Courier', 'monospace'],
      }
    },
  },
  plugins: [],
} satisfies Config;