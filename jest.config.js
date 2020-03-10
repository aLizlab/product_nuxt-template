module.exports = {
  preset: 'ts-jest',
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  testMatch: [
    '<rootDir>/app/components/**/*.spec.ts',
    '<rootDir>/app/components/**/*.spec.js',
    '<rootDir>/app/libs/**/*.spec.ts',
    '<rootDir>/app/libs/**/*.spec.js',
    '<rootDir>/app/store/**/*.spec.ts',
    '<rootDir>/app/store/**/*.spec.js',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/app/components/**/*.vue',
    '<rootDir>/app/pages/**/*.vue',
    '<rootDir>/app/libs/**/*.ts',
    '<rootDir>/app/store/**/*.ts',
  ],
  coverageDirectory: './coverage/',
  coverageReporters: ['json', 'text-lcov', 'lcov'],
}
