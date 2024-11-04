// tailwind.config.js
module.exports = {
  mode: 'jit', // Modo JIT habilitado
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      // Si necesitas extender temas o agregar nuevos valores
    },
  },
  plugins: [],
};

