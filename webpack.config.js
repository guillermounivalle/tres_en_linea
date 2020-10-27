const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const { join } = require('path');
const outputPath = join(process.cwd(), '/dist');

module.exports ={
    entry: './src/App/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: outputPath
    },
    mode: 'production',
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins:[new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template: './src/public/index.html'
    })]
      
}

