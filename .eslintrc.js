module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:react-hooks/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    /**
     * eslint
     */
    camelcase: 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'require-await': 'error',
    'no-use-before-define': 'off',
    'no-return-assign': 'off',

    /**
     * @typescript-eslint/eslint-plugin
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    /**
     * eslint-plugin-prettier
     */
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],

    /**
     * eslint-plugin-import
     */
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'object'],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx', './src/setupTests.ts'],
      },
    ],
    'import/no-named-as-default': 'off',
  },
  overrides: [
    {
      files: ['*.test.ts', '*.spec.ts'],
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.tsx', '.json'],
  },
};
