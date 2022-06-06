module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  modulePaths: [
    "<rootDir>"
  ],
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/",
    "<rootDir>/cypress/",
    "<rootDir>/src/test.ts",
    "<rootDir>/shared",
  ],
  globals: {
    __PATH_PREFIX__: "",
    'ts-jest': {
      diagnostics: false
    }
  },
  collectCoverage: true,
  coverageReporters: ['html', 'text', 'json'],
  coverageDirectory: './coverage/app-cinemintic2022-mf',
  coverageThreshold: {
      "global": {
          "lines": 80,
          "statements": 80
      }
  },
  collectCoverageFrom: [
    "src/app/**/*.{js,ts}",
    "!<rootDir>/node_modules/",
    "!<rootDir>/e2e/",
    "!<rootDir>/src/app/enums/**/*.ts",
    "!<rootDir>/src/app/interfaces/**/*.ts",
    "!<rootDir>/src/app/models/**/*.ts",
    "!<rootDir>/src/app/**/*.module.ts"
  ],
  testEnvironment: 'jsdom',
  verbose: true
};
