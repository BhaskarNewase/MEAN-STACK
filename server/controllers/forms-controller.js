var User = require('../models/user');

module.exports.edit = function(req, res){
	var user = new User(req.body);
	user.save(function (err, result){
		res.json(result);
	});
}