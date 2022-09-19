/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      barlow: ['Barlow Condensed'],
      karla: ['Karla']
    },
    extend: {
      fontSize: {
        xl: ['20px', '26px'],
        lg: ['18px', , '24px'],
        base: ['16px', , '22px'],
        sm: ['14px', , '20px'],
        xs: ['12px', , '18px'],
        tiny: ['10px', , '16px']
      },
      colors: {
        'branding-navy': '#001738',
        'branding-white': '#FFFFFF',
        'branding-pumpkin': '#FF7200',
        'branding-black': '#000000',
        'branding-rich-black': '#111622',
        'branding-light-blue': '#CEDDEF',
        'main-heading': '#2C2C2C',
        'main-text': '#4B4B4B',
        'main-body': '#6E6E6E',
        'main-disabled': '#B3B3B3',
        'main-success': '#008060',
        'main-warning': '#916A00',
        'main-danger': '#D72C0D',
        'main-information': '#2C6ECB',
        'main-accent': '#FF7200',
        'main-white': '#FFFFFF',
        'surface-success-neutral': '#F1F8F5',
        'surface-success-hovered': '#ECF6F1',
        'surface-success-pressed': '#E2F1EA',
        'surface-warning-neutral': '#FFF5EA',
        'surface-warning-hovered': '#FFF2E2',
        'surface-warning-pressed': '#FFEBD3',
        'surface-danger-neutral': '#FFF4F4',
        'surface-danger-hovered': '#FFF0F0',
        'surface-danger-pressed': '#FFE9E8',
        'surface-info-neutral': '#F2F7FE',
        'surface-info-hovered': '#EDF4FE',
        'surface-info-pressed': '#E5EFFD',
        'interactive-primary-neutral': '#FF7200',
        'interactive-primary-hovered': '#FF8827',
        'interactive-primary-pressed': '#EB6900',
        'interactive-secondary-neutral': '#FFFFFF',
        'interactive-secondary-hovered': '#F6F6F7',
        'interactive-secondary-pressed': '#F1F2F3',
        'interactive-success-neutral': '#008060',
        'interactive-success-hovered': '#006E52',
        'interactive-success-pressed': '#005E46',
        'interactive-warning-neutral': '#E68619',
        'interactive-warning-hovered': '#DA7B11',
        'interactive-warning-pressed': '#BD640D',
        'interactive-danger-neutral': '#D82C0D',
        'interactive-danger-hovered': '#BC2200',
        'interactive-danger-pressed': '#A21B00',
        'interactive-info-neutral': '#2C6ECB',
        'interactive-info-hovered': '#1F5199',
        'interactive-info-pressed': '#103262',
        'interactive-disabled': '#F6F6F7',
        gray: {
          0: '#FFFFFF',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EAEAEA',
          300: '#E1E1E1',
          400: '#CACACA',
          500: '#B3B3B3',
          600: '#8E8E8E',
          700: '#6E6E6E',
          800: '#4B4B4B',
          900: '#2C2C2C'
        }
      }
    }
  },
  plugins: []
}
