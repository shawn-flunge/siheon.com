/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // 'sm': {'max': '420px'},
      // 'md': {'min': '421px', 'max': '600px'},
      // 'lg': {'min': '601px', 'max': '880px'},
      // 'xl': {'min': '881px'}
      'sm': {'max': '620px'},
      'md': {'min': '621px', 'max': '880px'},
      'lg': {'min': '881px',},
      // 'xl': {'min': '881px'}
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Pretendard', ]
        // sans: ['RobotoFlex']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
