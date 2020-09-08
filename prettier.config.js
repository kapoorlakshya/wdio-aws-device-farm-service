module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  printWidth: 120,
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        singleQuote: true,
        semi: false,
        tabWidth: 2,
      },
    },
  ],
};
