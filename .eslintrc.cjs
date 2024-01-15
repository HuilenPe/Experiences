module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  settings: {
    react: {
      version: 'detect', // 'detect' buscará automáticamente la versión de React en el proyecto
    },
  },
  rules: {
    // Reglas estrictas de ESLint
    'no-console': 'error', // Prohibir el uso de console.log en el código
    'no-debugger': 'error', // Prohibir el uso de debugger en el código
    'no-unused-vars': 'error', // Advertir sobre variables no utilizadas

    // Reglas específicas de TypeScript
    '@typescript-eslint/no-explicit-any': 'error', // Prohibir el uso explícito de "any" en TypeScript
    '@typescript-eslint/no-unused-vars': 'error', // Advertir sobre variables no utilizadas en TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Exigir tipos explícitos para las funciones de TypeScript

    // Reglas específicas de React
    'react/prop-types': 'off', // Desactivar la validación de propTypes (si no estás utilizando PropTypes)
    'react/react-in-jsx-scope': 'off', // No es necesario importar React en cada archivo JSX

    // Reglas de estilo (puedes ajustar según tus preferencias)
    'indent': ['error', 2], // Usar 2 espacios de sangría
    'quotes': ['error', 'single'], // Usar comillas simples
    'semi': 0, // Punto y coma al final de cada declaración
    'comma-spacing': 0, // Espacio después de las comas
  },
};
