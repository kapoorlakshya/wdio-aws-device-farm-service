module.exports = {
    env: {
        es6: true,
        'jest/globals': true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings'
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2016,
        sourceType: 'module'
    },
    plugins: [
        'jest',
        'json-files',
        'sort-keys-fix'
    ],
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'brace-style': ['error', '1tbs', { allowSingleLine: true }],
        camelcase: ['error', { properties: 'never' }],

        'comma-spacing': ['error', { after: true, before: false }],
        'import/default': 2,
        'import/export': 2,
        'import/named': 2,
        'import/namespace': 2,

        'import/no-unresolved': [2, { amd: true, commonjs: true }],
        indent: [2, 4],
        'json-files/sort-package-json': 'error',
        'no-else-return': 'error',
        'no-lonely-if': 'error',
        'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 1 }],
        'no-tabs': 'error',
        'no-trailing-spaces': ['error', {
            ignoreComments: false,
            skipBlankLines: false
        }],
        'object-curly-spacing': ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true }],
        'require-atomic-updates': 0,
        semi: ['error', 'never'],
        'sort-keys-fix/sort-keys-fix': 'error',
        'unicode-bom': ['error', 'never']
    }
}
