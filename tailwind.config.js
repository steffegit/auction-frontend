module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--bg-color)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        textColor: 'var(--text-color)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
