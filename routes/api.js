

var mongo_lib = require('./mongo_db_lib');

exports.getFilm = function (req, res) {
	var name = req.body.name;
	mongo_lib.getFilm(name, function (err, result) {
		if (err) {
			console.log(JSON.stringify(err, null, 4));
			res.send(401);
			return;
		} else {
			res.send(200, result);
		}
	});
}