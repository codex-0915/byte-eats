// eslint.config.js
// Minimal flat config for Expo + React + Prettier
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = defineConfig([
  expoConfig,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['dist/*', 'node_modules/*'],

    // Flat config requires plugins to be an object
    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      // Prettier errors show as ESLint errors
      'prettier/prettier': 'error',

      // Optional: enforce 2-space indentation for JS/TS & JSX
      indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral *'] }],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
    },
  },
]);
