module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'encrypt-storage',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        'crypto': 'crypto',
    },
    resolve: { 
        extensions: ['.ts', '.js'],
        fallback: {
            "crypto": require.resolve("crypto-browserify")
        }
    },
    module: {
        rules: [{
          test: /\.js$/,
          exclude: '/node_modules/'
        }]
      },
}