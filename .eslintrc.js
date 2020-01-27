module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true,
  },
  plugins: ["jest"],
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: ["error", 4],
    "no-console": ["error", { allow: ["warn", "info"] }],
    "comma-dangle": ["error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "always-multiline"
      }],
    "arrow-parens": [2, "as-needed", { "requireForBlockBody": true }],
    "jest/no-identical-title": "error",
  },
  "env": {
    "jest": true
  }
};
