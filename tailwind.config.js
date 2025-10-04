/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
  // Configuración para mejor compatibilidad con PrimeNG
  corePlugins: {
    preflight: false, // Evita conflictos con estilos de PrimeNG
  },
};
