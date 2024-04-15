module.exports = {
    transpileDependencies: ['vuetify'],
    devServer: {
        proxy: 'https://api.coingecko.com/api/v3',
    },
    publicPath:
        process.env.NODE_ENV === 'production' ? '/teste-wealth99/' : '/',
}
