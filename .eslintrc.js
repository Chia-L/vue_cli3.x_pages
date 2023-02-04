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
    '@typescript-eslist/camelcase': 0,
    'brace-style': 'off',
    'camelcase': 'off',
    'generator-star-spacing': 'off',
    'new-parens': 'off',
    'no-array-constructor ': 'off',
    // 开发模式允许使用console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 开发环境允许使用调试
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-implicit-globals': 'off',
    'no-new': 'off',
    'no-useless-escape': 'off',
    'one-var': 'off',
    // 代码块中避免多余留白
    'padded-blocks': 'off',
    'prefer-promise-reject-errors': 'off',
    // 函数名括号前不需要有空格
    'space-before-function-paren': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
  }
}
