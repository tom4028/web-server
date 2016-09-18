var http = require('http');
var fs = require('fs');

 

// var contents = fs.readFileSync('package.json').toString();
// console.log(contents);

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-type":"text/plain"});
	
	var contents = fs.readFile('package.json',function(err,buf){
		buf.toString();
	});
	response.end(contents);
});
server.listen(7000);