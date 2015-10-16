var mongoose  = require('mongoose');

module.exports = mongoose.model('Meetup',{
	name: String,
	email:String,
	phone:String,
	message:String
	//name : {type : String}
});