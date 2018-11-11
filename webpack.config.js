const webpack = require( 'webpack' ),
	path = require( 'path' ),
	MiniCssExtractPlugin = require( 'mini-css-extract-plugin' ),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
	pkg = require( './package.json' );

module.exports = (env, options) => {

	const devMode = options.mode !== 'production';

	return {
		entry: {
			'image-placeholder-gutenberg':     './assets/src/blocks.js',
			'image-placeholder-gutenberg.min': './assets/src/blocks.js',
		},
		output: {
			path: path.resolve( __dirname, 'assets' ),
			filename: '[name].js',
		},
		module: {
			// Specify each rule for loaders
			rules: [
				{
					use: 'babel-loader',
					test: /\.js$/,
					exclude: [
						path.resolve( __dirname, 'assets/js/vendor/response.js' ),
						'/(node_modules|bower_components)/'
					]
				},

				{
					test: /\.scss$/,
					use: [
						MiniCssExtractPlugin.loader,
						{ loader: 'css-loader', options: { sourceMap: false } },
						{ loader: 'sass-loader', options: { sourceMap: false } },
					],
				},

				{
					enforce: 'pre',
					test: /\.js$/, // include .js files
					include: [
						path.resolve( __dirname, 'assets/js/src/' )
					],
					use: [ {
						loader: 'eslint-loader',
						options: {
							failOnWarning: false,
							failOnError: true,
							configFile: '.eslintrc.js',
							browser: true,
							node: false,
							jquery: true,
						}
					} ]
				},
			]
		},

		devtool: "inline-source-map",

		optimization: {
			minimize: true,
			minimizer: [
				new UglifyJsPlugin( {
					include: /\.min\.js$/
				} )
			],
		},

		plugins: [
			// Avoid publishing files when compilation failed:
			new webpack.NoEmitOnErrorsPlugin(),

			new webpack.ProvidePlugin( {
				'window.jQuery': 'jquery'
			} ),

			new MiniCssExtractPlugin( {
				filename: '[name].css',
				chunkFilename: '[id].css'
			} ),

			new OptimizeCssAssetsPlugin( {
				assetNameRegExp: /\.optimize\.css$/g,
				cssProcessor: require('cssnano'),
				cssProcessorPluginOptions: {
					preset: ['default', { discardComments: { removeAll: true } }],
				},
				canPrint: true
			} ),

			new webpack.BannerPlugin(
				pkg.name + ' - v' + pkg.version + '\n' +
				pkg.author + '\n' +
				'Copyright (c) ' + new Date().getFullYear() + ';\n' +
				'Licensed GPLv2+'
			),
		],
		stats: {
			colors: true
		}
	}
};
