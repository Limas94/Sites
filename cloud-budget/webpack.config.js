const path = require("path");

// Плагин для работы с HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Плагин для минификации css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Плагин для чистки от неиспользуемых файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Плагин для префиксов
const autoprefixer = require('autoprefixer');

const CopyWebpackPlugin= require('copy-webpack-plugin');

module.exports = {
	// Точка входа
	entry: {
		"index.js": './src/global/'
	},

	// Точка выхода
	output: {
		// Смена имени по-умолчанию
		filename: '[name].bundle.js',
		// Куда сохранять
		path: path.resolve(__dirname, 'dist')
	},

	// Сервак, отслеживающий изменения в выбранном каталоге
	devServer: {
		contentBase: './dist'
		// contentBase: [path.resolve(__dirname, "/dist"), path.resolve(__dirname, "assets")],
	},

	// Модули
	module: {
		//Правила
		rules: [
			// Шаблонизатор handlebars
			{
				test: /\.handlebars$/,
				loader: 'handlebars-loader'
			},

			{
				// Проверка на расширение файла
				test: /\.(sass|scss|css)$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								autoprefixer({
									browsers:['last 4 version']
								})
							]
						},
					},
					"sass-loader"
				],
			},

			{
				// Загрузка изоражений
				test: /\.(jpe?g|gif|png|svg)$/,
				use: [
					{ loader: 'file-loader' },

					{
						loader: 'file-loader',
						options: {
							// Сжатие изображений JPEG
							mozjpeg: {
								progressive: true,
								quality: 65
							},

							// Сжатие изображений PNG
							optipng: {
								enabled: false,
							},

							// Сжатие изображений PNG
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4
							},

							// Сжатие изображений GIF
							gifsicle: {
								interlaced: false,
							},

							// Сжатие изображений JPG / PNG / WEBP
							webp: {
								quality: 75
							}
						}
					}
				]
			},

			{
				// Загрузка шрифтов
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				exclude: /node-models/,
				loader: 'file-loader',
				options: {
					publicPath: './fonts',
					name: '../fonts/[name].[ext]'
				}
			},

			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/pages/index.handlebars'
		}),

		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),

		new CleanWebpackPlugin({
			path: './dist/*.*'
		}),

		new CopyWebpackPlugin([
			{
				from: './src/assets/fonts',
				to: './fonts'
			}
		]),
	]
};
