/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
  ],
  theme: {
    fontFamily: {
      'questrial': ['Questrial', 'sans'],
      'nunito': ['Nunito', 'sans']
    },
    extend: {
      colors: {
        'mygreen': ['#3F5553'],
        'mybege': ['#EFE7E6'],
        'mygreenlight': ['#517A76'],
        'mybegelight': ['#F3E8CE'],
        'mygold': ['#AA8847'],
        'mygray': ['#8C928E']
      },
    },
  },
  devServer: {
    devServerBroadcastDelay: 1000
  }
}

