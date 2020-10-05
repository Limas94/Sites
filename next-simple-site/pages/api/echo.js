// данный файл для обработки на сервере
export default function echo(req, res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({
		// ?? - если нет, то ..
		message: req.query.message ?? 'Base message'
	}));
};