import nextJest from 'next/jest';

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'reports/coverage',
    coverageProvider: 'v8',
    testResultsProcessor: 'jest-sonar-reporter',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/pages/(.*)$': '<rootDir>/pages/$1'
    },
    testEnvironment: 'jest-environment-jsdom'
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
