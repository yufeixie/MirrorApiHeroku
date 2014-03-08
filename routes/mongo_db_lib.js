var mongodb = require('mongodb'),
	ObjectID = mongodb.ObjectID,
	MongoClient = mongodb.MongoClient,
	mongoskin = require('mongoskin');

var db = mongoskin.db("mongodb://miten:starmix@troup.mongohq.com:10022/filmein", {
		w: 1
	});

exports.getFilm = function (name, callback) {
	var films = db.collecion('films');
	films.findOne({name: name}, callback);
};