const path = require('path');

module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
};