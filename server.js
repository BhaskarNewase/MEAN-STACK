var express = require('express'),
	app     = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	meetupsController = require('./server/controllers/meetups-controller');
	formsController = require('./server/controllers/forms-controller');


mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/templates', express.static(__dirname + '/client/templates'));
app.use('/partials', express.static(__dirname + '/client/partials'));

//Rest api
app.get('/api/meetups',meetupsController.list);
app.post('/api/meetups',meetupsController.create);
app.get('/api/users',formsController.listdata);
app.post('/api/users',formsController.edit);
//app.get('/api/users',formsController.editrow);
app.post('/api/users/delete',formsController.deleterow);
app.post('/api/users/editrow',formsController.editrow);



app.listen(3000, function(){
	console.log('I\'m Listening...');
})