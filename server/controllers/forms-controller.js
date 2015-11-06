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
	User.findOne({'_id':req.body.key},function (err, results){
		res.json(results);
	});
}

module.exports.deleterow = function(req, res){

	User.remove({ '_id' : req.body.key }, function (err, result) {
   		res.json(result);
   	});
}

module.exports.updateData = function(req, res){
	//console.log(req.body.id);
	User.update({_id:req.body.id},{$set:{name:req.body.name, email:req.body.email, phone:req.body.phone, 
	message:req.body.message, }},function (err, results){
		res.json(results);
	});
	// collection.update({_id:"123"}, {$set: {author:"Jessica"}});
}