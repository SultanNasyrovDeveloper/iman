// const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    outputDir: 'dist',
    // baseUrl: IS_PRODUCTION
    // ? 'http://cdn123.com'
    // : '/',
    // For Production, replace set baseUrl to CDN
    // And set the CDN origin to `yourdomain.com/static`
    // Whitenoise will serve once to CDN which will then cache
    // and distribute

    pages: {
        index: {
            entry: 'src/index.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    devServer: {
        clientLogLevel: 'warning',
        hot: true,
        contentBase: 'dist',
        compress: true,
        open: true,
        overlay: { warnings: false, errors: true },
        publicPath: '/',
        quiet: true,
        watchOptions: {
            poll: false,
            ignored: /node_modules/
        }
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(args => {
                args.compilerOptions.whitespace = 'preserve'
            })
    },
    productionSourceMap: false,
    assetsDir: './assets/',
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin([
                { from: 'src/assets/img', to: 'assets/img' },
                { from: 'src/assets/fonts', to: 'assets/fonts' }
                ])
        ]
    }
};
