module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--bg-color)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        textColor: 'var(--text-color)',
        darkColor: 'var(--dark-color)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
