var webpack = require('webpack');
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './app'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'app',],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        },
        { 
          test: /\.css$/, 
          loader: "style-loader!css-loader" 
        },
        { 
          test: /\.png$/, 
          loader: "url-loader?limit=100000" 
        },
        { 
          test: /\.jpg$/, 
          loader: "file-loader" 
        },
        {
            test: /\.(ttf|eot|svg|woff|woff(2)?)(\S+)?$/,
            loader: 'file-loader?publicPath=/&name=fonts/[name].[ext]'
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};