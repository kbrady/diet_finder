var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/login', function(request, response) {
	response.render('pages/login');
});
app.get('/sign_up', function(request, response) {
	response.render('pages/sign_up');
});
app.get('/about', function(request, response) {
	response.render('pages/about');
});
app.get('/faq', function(request, response) {
	response.render('pages/faq');
});
app.get('/new_york', function(request, response) {
	response.render('pages/place');
});
app.get('/nashville', function(request, response) {
	response.render('pages/place');
});
app.get('/contact', function(request, response) {
	response.render('pages/contact');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


