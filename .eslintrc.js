module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended'
    ],
    env: {
        node: true
    },
    rules: {
        'no-console': [
            'error',
            {
                allow: ['info', 'warn', 'error']
            }
        ],
        'prettier/prettier': ['error'],
        'linebreak-style': 'off',
        'func-style': ['error'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-explicit-any': ['error']
    },
    plugins: ['@typescript-eslint', 'prettier']
};
