/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'back-pomodoro-red':'#D95550',
        'txt-pomodoro-red': '#D95550',
        'back-long-blue':   '#457CA3',
        'txt-long-blue':    '#457CA3',
        'back-short-blue':  '#4C9195',
        'txt-short-blue':   '#4C9195',
        'long-blue':        '#5889AC',
        'short-blue':       '#5E9CA1',
        'pomodoro-red':     '#DD6662',
        'pomodoro-focus':   '#BC5753',
        'short-focus':      '#508588',
        'long-focus':      '#4B7593',
      }
    },
  },
  plugins: [],
}
