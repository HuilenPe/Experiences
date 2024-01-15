import baseConfig from './jest.config'

export default {
  ...baseConfig, // Copia la configuración base

  // Configuraciones adicionales específicas para pruebas de integración
  testMatch: ['<rootDir>/tests/integration/**/*.test.{ts,tsx}'],
};
