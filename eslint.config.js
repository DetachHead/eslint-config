import { defineConfig } from 'eslint/config';
import config from './dist/index.js';

export default defineConfig(config, {
  files: ['src/*.ts'],
  languageOptions: {
    parserOptions: {
      project: './src/tsconfig.json',
    },
  },
});
