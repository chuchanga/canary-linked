module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
     semi: ["error", "always"],
     quotes: ["error", "double", { allowTemplateLiterals: true }],
     camelcase: ["error"],
    "capitalized-comments": ["error"],
    "no-unused-vars": ["warn"],
    "max-lines-per-function": ["error", 60],
    "max-nested-callbacks": ["error", 5],
    "max-params": ["error", 10],
    "max-depth": ["error", 5],
    "no-useless-catch": ["error"],
    "vars-on-top": ["warn"],
    "no-unreachable": ["error"],
    "no-extra-semi": ["error"],
    "no-extra-parens": ["error"]
  }
}

