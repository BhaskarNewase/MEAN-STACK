var Meetup = require('../models/meetup');
//var User = require('../models/user');
module.exports.create = function(req, res){
	var meetup = new Meetup(req.body);
	meetup.save(function (err, result){
		res.json(result);
	});
}

module.exports.list = function(req, res){
	Meetup.find({}, function (err, results){
		res.json(results);
	});
}

// module.exports.saveData = function(req, res){
// 	var user = new User(req.body);
// 	user.save(function (err, result){
// 		res.json(result);
// 	});
// }