module.exports = {
  root: true,
  plugins: [
    '@typescript-eslint',
    'vue',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'plugin:vue/strongly-recommended',
    'plugin:vue-types/strongly-recommended',
    'prettier',
    '@nuxtjs/eslint-config-typescript',
  ],
  rules: {
    'prettier/prettier': [
      'off', // disable prettier rules
      {
        singleQuote: true,
        trailingComma: 'all',
        semi: false,
        printWidth: 120,
      },
    ],

    // prettier handles these rules
    'semi': [2, 'never'],
    'function-paren-newline': ['off'],
    'comma-dangle': [2, 'always-multiline'],
    'object-curly-newline': ['off'],
    'max-len': ['error', {
      code: 120,
      ignoreUrls: true
    }],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    "@typescript-eslint/no-unused-vars": "error",
    // vue
    'vue-types/require-default-prop': ['off'],
    'vue/require-default-prop': ['off'],
  },
}
