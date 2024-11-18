import angular from '@angular-eslint/eslint-plugin';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import tseslint from 'typescript-eslint';


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/max-len': ['warn', { 'code': 150 }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-unused-expressions": "warn",
    },
  },
  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': angular,
    },
    ...angular.recommended,
    rules: {
      "@angular-eslint/prefer-on-push-component-change-detection": [
        "warn",
      ],
      "@angular-eslint/directive-selector": [
        "warn",
        {
          "type": "attribute",
          "prefix": "app",
          "style": "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "warn",
        {
          "type": "element",
          "prefix": "app",
          "style": "kebab-case",
        },
      ],
    },
  },
];
