module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.modern.mjs'
    },
    optimization: {
        minimize: false
    },
    devServer: {
        inline:true,
        port: 8008
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
                                            'last 2 Chrome versions', 'not Chrome < 60',
                                            'last 2 Safari versions', 'not Safari < 10.1',
                                            'last 2 iOS versions', 'not iOS < 10.3',
                                            'last 2 Firefox versions', 'not Firefox < 54',
                                            'last 2 Edge versions', 'not Edge < 15',
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
