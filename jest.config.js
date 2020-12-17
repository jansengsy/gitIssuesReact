module.exports = {
  setupFiles: ['./scripts/setupTests.js'],
  collectCoverageFrom: [
    './src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!config/**',
    '!coverage/**',
    '!jest.config.js',
    '!./src/setupTest.js',
    '!./src/types.js',
    '!./src/index.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
