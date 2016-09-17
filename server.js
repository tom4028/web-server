var express = require('express');

var app = express();

var PORT = 3000;


var middleware = {
	requireAuthentication:function(req,res,next){
		console.log('private route hit!');
		next();
	},
	logger:function(req,res,next){
		console.log(new Date().toString()+' '+req.method+' '+req.url);
		next();
	}
};

// app.get('/',function(req,res){
	// res.send('Hello Express!');
// });


//about
//about us

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);
app.get('/about',middleware.requireAuthentication,function(req,res){
	res.send('About us!');
});

app.use(express.static(__dirname+'/public'));
console.log(__dirname);
app.listen(PORT,function(){
	console.log('Server is running...on'+PORT+'!');
});