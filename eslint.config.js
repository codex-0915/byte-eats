// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: ['prettier'],
    rules: {
      // ✅ Prettier integration
      'prettier/prettier': ['error'],

      // Optional: keep these if you want ESLint to still warn on indentation issues
      indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral *'] }],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
    },
  },
]);
