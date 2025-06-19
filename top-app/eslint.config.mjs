// eslint.config.mjs

import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // Подключение стандартных конфигураций Next.js
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Настройки для файлов TypeScript
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      "semi": ["error", "always"],
      '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    },
  },

  // Настройки для файлов JavaScript
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'semi': ['warn', 'always'],
    },
  },
];


