var User = require('../models/user');

module.exports.edit = function(req, res){
	var user = new User(req.body);
	user.save(function (err, result){
		res.json(result);
	});
}

module.exports.listdata = function(req, res){
	User.find({}, function (err, results){
		res.json(results);
	});
}

module.exports.editrow = function(req, res){
	User.find(function (err, results){
		res.json(results);
	});
}

module.exports.deleterow = function(req, res){

	User.remove({ '_id' : req.body.key }, function (err, result) {
   		res.json(result);
   	});
	console.log('helllo');
	
	// User.find({}, function (err, results){
	// 	res.json(results);
	// });
	//console.log('record deleted successfully');
}