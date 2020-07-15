module.exports = {
    comments: false,
    env: {
        development: {
            plugins: ['source-map-support'],
            sourceMaps: 'inline'
        }
    },
    plugins: [
        '@babel/plugin-proposal-function-bind',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-optional-catch-binding'
    ],
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 8
            }
        }]
    ]
}