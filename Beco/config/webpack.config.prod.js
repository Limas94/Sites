const path = require('path');

// Плагин для работы с HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Плагин для чистки от неиспользуемых файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Плагин для автоматической расстановки префиксов
const autoprefixer = require('autoprefixer');

// Копирование
// const CopyPlugin = require('copy-webpack-plugin');

// Минификация css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	
	// Точка входа
	entry: './src/global/index.js',

	// выход
	output: {
		// Смена имени по-умолчанию
		// filename: '[contenthash].js',
		filename: '[name].[contenthash].js',
		// Куда сохранять
		path: path.resolve(__dirname, '../dist'),
	},

	module: {
		//Правила
		rules: [
			// Шаблонизатор handlebars
			{ test: /\.hbs$/, loader: 'handlebars-loader' },

			{
				test: /\.(sass|scss|css)$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								autoprefixer({
									overrideBrowserslist:  ['last 8 versions'],
								})
							],
						},
					},
					"sass-loader",
				]
			},

			{
				// Загрузка изображений 
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: '[sha512:hash:base64:7].[ext]',
							outputPath: 'assets/',
						}
					}
				]
			},

			{
				// Загрузка шрифтов
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[sha512:hash:base64:7].[ext]',
							outputPath: 'assets/',
						}
					}
				]
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
		],
	},

	optimization: {
		moduleIds: 'hashed',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			}
		}
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/pages/index.hbs'
		}),

		// new CopyPlugin([
		// 	{ from: './src/assets/images/', to: './assets/' },
		// ]),

		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css"
		}),

		new CleanWebpackPlugin()
	]
};