var path = require('path');
 var webpack = require('webpack');

 module.exports = {
    mode: "production", 
     entry: './js/main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         rules: [
             {
                test: /\.jsx?$/,
                 include: [
                    path.resolve(__dirname, "js")
                  ],
                 loader: 'babel-loader',
                 options: {
                     presets: ['es2015']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };