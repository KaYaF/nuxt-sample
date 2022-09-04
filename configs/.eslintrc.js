module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    'no-useless-constructor': 'off',
    'vue/multi-word-component-names': 'off',
    eqeqeq: ['error', 'smart'],
  },
};
