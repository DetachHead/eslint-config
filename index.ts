import { Linter } from 'eslint'

const eslint: Linter.Config = {
    ignorePatterns: ['dist'],
    env: {
        node: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:eslint-comments/recommended',
        'plugin:import/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['eslint-plugin-prefer-arrow', '@typescript-eslint'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'never'],
        '@typescript-eslint/ban-types': 'error',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        '@typescript-eslint/no-throw-literal': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/require-description': 'error',
        eqeqeq: 'error',
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                classPropertiesAllowed: true,
            },
        ],
        '@typescript-eslint/method-signature-style': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        'require-await': 'error',
        '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
        'no-return-await': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-explicit-any': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/*.test.ts', '**/*.spec.ts', 'jest.config.ts'] },
        ],
        'import/no-unresolved': 'off', // false positives, typescript handles this anyway
        'import/export': 'off', // false positives when default exporting a class and an interface, typescript checks this anyway
        'import/no-duplicates': 'error',
        'require-unicode-regexp': 'error',
        'no-trailing-spaces': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-extra-semi': 'off', // conflicts with my prettier config
        '@typescript-eslint/no-unnecessary-condition': 'error',
        'no-restricted-syntax': [
            'error',
            {
                // https://github.com/typescript-eslint/typescript-eslint/issues/5243
                selector: 'TSAbstractMethodDefinition',
                message: 'old method syntax is not allowed. use an arrow function instead',
            },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
    },
}

module.exports = eslint
