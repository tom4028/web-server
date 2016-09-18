var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');



// app.get('/',function(req,res){
	// res.send('Hello Express!');
// });


//about
//about us

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About Us!');
});

app.use(express.static(__dirname+'/public'));
console.log(__dirname);
app.listen(PORT,function(){
	console.log('Server is running...on'+PORT+'!');
});