const path = require('path');

// Плагин для работы с HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Плагин для минификации css, пока не использую
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Плагин для чистки от неиспользуемых файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Плагин для префиксов
const autoprefixer = require('autoprefixer');


const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	// Точка входа
	entry: './src/global/index.js',

	// Точка выхода
	output: {
		// Смена имени по-умолчанию
		filename: '[name].bundle.js',
		// Куда сохранять
		path: path.resolve(__dirname, 'dist'),
	},

	devtool: isDevelopment && "source-map",

	// Сервак, отслеживающий изменения в выбранном каталоге
	devServer: {
		contentBase: "/dist"
	},

	// Модули
	module: {
		//Правила
		rules: [
			// Шаблонизатор handlebars
			{test: /\.handlebars$/, loader: 'handlebars-loader'},

			{
				test: /\.(sass|scss|css)$/,
				use: [
					'style-loader',
					{
						loader: "css-loader",
						options: {
							sourceMap: isDevelopment,
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => [
								autoprefixer({
									browsers:['last 4 version']
								})
							],
							sourceMap: true
						},
					},
					"sass-loader"
				]
			},

			{
				// Загрузка изоражений и шрифтов
				test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: '[contenthash].[ext]',
							outputPath: 'assets/'
						}
					}
				]
			},

			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/pages/index.handlebars'
		}),

		new CleanWebpackPlugin(),
	]
};
