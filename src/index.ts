// TODO: convert this to a .ts file once https://github.com/eslint/eslint/issues/20903 is resolved

import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  [
    {
      // why on earth does `ignores` not work at all unless it's in a separate object on its own???
      // so glad eslint made this massive breaking change to their config system only to replace it with a 10x more confusing and convoluted one
      ignores: ['**/dist/**'],
    },
    {
      languageOptions: {
        globals: {
          node: true,
          es2021: true,
          jest: true,
        },
        parserOptions: {
          ecmaVersion: 12,
          sourceType: 'module',
          project: './tsconfig.json',
        },
      },
      extends: [
        js.configs.all,
        tseslint.configs.all,
        comments.recommended,
        // @ts-expect-error https://github.com/JamieMason/eslint-plugin-prefer-arrow-functions/pull/70
        preferArrowFunctions.configs['all'],
        importPlugin.flatConfigs.recommended,
        jsdoc.configs['flat/recommended'],
        // TODO: circular dependency between my plugin and my config, so cant update that project to flat config until this one has been updated
        // 'plugin:detachhead/all',
      ],
      rules: {
        'sort-imports': 'off', // covered by dprint
        'no-warning-comments': 'off',
        'sort-keys': 'off',
        'capitalized-comments': 'off',
        'no-inline-comments': 'off',
        'linebreak-style': ['error', 'unix'],
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        'eqeqeq': 'error',
        '@eslint-community/eslint-comments/no-unused-disable': 'error',
        '@eslint-community/eslint-comments/require-description': [
          'error',
          { ignore: ['eslint-enable'] },
        ],
        'prefer-arrow-functions/prefer-arrow-functions': [
          'error',
          {
            classPropertiesAllowed: true,
          },
        ],
        // Use the normal require-await rule because the @typescript-eslint one allows functions that return promises
        // Which don't use the await keyword. in those cases, the async keyword is redundant and leads to people
        // Misunderstanding exactly what the await keyword does.
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': [
          'error',
          { ignoreIIFE: true },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            caughtErrors: 'all',
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            includeTypes: true,
            devDependencies: [
              '**/*.test.ts',
              '**/*.spec.ts',
              'jest.config.ts',
              // Files starting with . are typically project config files
              '.*.cjs',
              '.*.js',
              '.*.ts',
            ],
          },
        ],

        // False positives & handled by typescript anyway:
        'import/no-unresolved': 'off',
        'import/export': 'off',
        'import/named': 'off',

        'import/no-duplicates': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-cycle': 'error',
        'import/no-commonjs': [
          'error',
          {
            // Covered by @typescript-eslint/no-var-requires
            allowRequire: true,
          },
        ],
        'import/no-self-import': 'error',
        'no-restricted-syntax': [
          'error',
          {
            // https://github.com/typescript-eslint/typescript-eslint/issues/5243
            selector: 'TSAbstractMethodDefinition',
            message: 'old method syntax is not allowed. use an arrow function instead',
          },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': [
          'error',
          { ignorePrimitives: true },
        ],
        '@typescript-eslint/return-await': ['error', 'in-try-catch'],
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          { allowNullish: false },
        ],

        // Typescript-eslint enables this for typescript files only, but js config files can benefit from it too because we aren't targeting an ancient node version
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
        // See TODO above
        // 'detachhead/suggestions-as-errors': [
        //   'error',
        //   {
        //     Exclude: [
        //       80001, // "File is a CommonJS module; it may be converted to an ES module" - esm in node is a pain because barely anything supports it properly
        //       80005, // "'require' call may be converted to an import." - covered by @typescript-eslint/no-var-requires
        //       80007, // "'await' has no effect on the type of this expression." - covered by @typescript-eslint/await-thenable
        //       7028, // "Unused label" - covered by no-unused-labels
        //     ],
        //   },
        // ],
      },
    },
  ],
  {
    files: ['*.js', '*.cjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-commonjs': 'off',
    },
  },
);
