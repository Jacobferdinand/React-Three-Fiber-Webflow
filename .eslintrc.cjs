module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    // enforce consistent indentation
    indent: ['error', 2],
    // enforce consistent use of semicolons
    semi: ['error', 'false'],
    // enforce the use of double quotes for strings
    quotes: ['error', 'single'],
    // enforce consistent use of trailing commas
    'comma-dangle': ['error', 'always-multiline'],
    // enforce consistent use of curly braces
    curly: 'error',
    // enforce consistent use of whitespace
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
}
