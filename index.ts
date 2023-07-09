import { Linter } from 'eslint'

export = {
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
        'plugin:detachhead/all',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['eslint-plugin-prefer-arrow', '@typescript-eslint', 'jsdoc', 'detachhead'],
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
        '@typescript-eslint/no-unused-vars': [
            'error',
            { args: 'all', caughtErrors: 'all', argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                includeTypes: true,
                devDependencies: [
                    '**/*.test.ts',
                    '**/*.spec.ts',
                    'jest.config.ts',
                    // files starting with . are typically project config files
                    '.*.cjs',
                    '.*.js',
                    '.*.ts',
                ],
            },
        ],

        // false positives & handled by typescript anyway:
        'import/no-unresolved': 'off',
        'import/export': 'off',
        'import/named': 'off',

        'import/no-duplicates': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-cycle': 'error',
        'import/no-self-import': 'error',
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
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        '@typescript-eslint/no-base-to-string': 'error',
        'no-extra-bind': 'error',
        '@typescript-eslint/no-shadow': 'error',

        // typescript-eslint enables this for typescript files only, but js config files can benefit from it too because we aren't targeting an ancient node version
        'no-var': 'error',

        'jsdoc/check-access': 'error',
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-line-alignment': 'error',
        'jsdoc/check-param-names': 'error',
        'jsdoc/check-property-names': 'error',
        'jsdoc/check-syntax': 'error',
        'jsdoc/check-tag-names': 'error',
        'jsdoc/check-types': 'error',
        'jsdoc/check-values': 'error',
        'jsdoc/empty-tags': 'error',
        'jsdoc/implements-on-classes': 'error',
        'jsdoc/multiline-blocks': 'error',
        'jsdoc/no-bad-blocks': 'error',
        'jsdoc/no-defaults': 'error',
        'jsdoc/no-multi-asterisks': [
            'error',
            {
                allowWhitespace: true,
            },
        ],
        'jsdoc/no-types': 'error',
        'jsdoc/no-undefined-types': 'error',
        'jsdoc/require-asterisk-prefix': 'error',
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-param-description': 'error',
        'jsdoc/require-param-name': 'error',
        'jsdoc/require-property': 'error',
        'jsdoc/require-property-description': 'error',
        'jsdoc/require-property-name': 'error',
        'jsdoc/require-property-type': 'error',
        'jsdoc/require-returns-check': 'error',
        'jsdoc/require-returns-description': 'error',
        'jsdoc/require-throws': 'error',
        'jsdoc/require-yields': 'error',
        'jsdoc/require-yields-check': 'error',
        'jsdoc/tag-lines': 'error',
        'jsdoc/valid-types': 'error',
        'jsdoc/imports-as-dependencies': 'error',
        'detachhead/suggestions-as-errors': [
            'error',
            {
                exclude: [
                    80001, // "File is a CommonJS module; it may be converted to an ES module" - esm in node is a pain because barely anything supports it properly
                    80005, // "'require' call may be converted to an import." - covered by @typescript-eslint/no-var-requires
                ],
            },
        ],
    },
    overrides: [{ files: ['*.js'], rules: { '@typescript-eslint/no-var-requires': 'off' } }],
} satisfies Linter.Config
