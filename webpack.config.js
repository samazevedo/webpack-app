// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = 'style-loader'

const config = {
    entry: './src/ts/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        open: true,
        host: 'localhost',
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    stylesHandler,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.(vs|fs|glsl)$/,
                exclude: ['/node_modules/'],
                loader: 'glslify-loader',
                options: {
                    transform: [['glslify-hex'], ['glslify-import']],
                    basedir: './src/glsl',
                },
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
    devtool: 'source-map',
    optimization: {
        innerGraph: true,
    },
    cache: {
        type: 'filesystem',
        buildDependencies: {
            config: [__filename],
        },
    },
}

module.exports = () => {
    if (isProduction) {
        config.mode = 'production'

        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW())
    } else {
        config.mode = 'development'
    }
    return config
}
