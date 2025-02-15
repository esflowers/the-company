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
					'950': '#030404',
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