module.exports = {
  bail: true,
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
  clearMocks: true,

  coverageProvider: 'v8',

  testEnvironment: 'node',

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
};
