const path = require('path')

module.exports = {
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['~', path.resolve(__dirname, './src')],
                    ['@', path.resolve(__dirname, './src')],
                ],
            },
        },
    },
}