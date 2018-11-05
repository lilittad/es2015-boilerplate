module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.legacy.js'
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            ['@babel/preset-env',
                                {
                                    modules: false,
                                    targets: {
                                        browsers: [
                                            '> 1%',
                                            'last 2 versions',
                                            'Firefox ESR',
                                        ],
                                    },
                                }
                            ]
                        ]
                    }
                }
            },
        ]
    }
}
