const parse = require('./parser'); // Adjust the path if needed

exports.parser = (req, res) => {
	const url = req.body.url;
	if (!url) {
		res.status(400).send('URL is required');
		return;
	}

	parse({ queryStringParameters: { url } }, null, (error, result) => {
		if (error) {
			res.status(500).send(error.toString());
		} else {
			res.status(200).send(result);
		}
	});
};
