const path = require("path");

// Плагин для работы с HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Плагин для работы с CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Плагин для чистки от неиспользуемых файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Плагин для префиксов
const autoprefixer = require('autoprefixer');

// Плагин для копирования всякого
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	// Точка входа
	entry: './src/index.js',

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
	},

	// Модули
	module: {
		//Правила
		rules: [
			{ test: /\.handlebars$/, loader: 'handlebars-loader'  },
			{
				// Проверка файла на стили
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					// Лоадеры, соответствующие выбранному стилю
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{
						// Важно, чтобы перед sass loaderom был
						loader: 'postcss-loader',
						options: {
							plugins: () => [autoprefixer()]
						},
					},
					{ loader: 'sass-loader' }
				],
			},

			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: ['babel-loader']
			},

			{
				// Проверка файла на img расширения
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
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
						},
					},
				],
			},

			{
				// Загрузка шрифтов
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			},
		],
	},

	resolve: {
		extensions: ['*', '.js']
	},

	plugins: [
		// Создание экземпляра класса
		new HtmlWebpackPlugin({
			title: 'Name Site',
			template: './src/index.handlebars'
		}),

		new MiniCssExtractPlugin({
			filename: "[name].css"
		}),

		new CleanWebpackPlugin({
			path: './dist/*.*'
		}),

		// new CopyWebpackPlugin([
		// 	{
		// 		// Выбираем что копировать и откуда
		// 		from: 'src/*.txt',
		// 		// Куда копировать
		// 		to: 'dist/'
		// 	},
		// ])
	]
};
