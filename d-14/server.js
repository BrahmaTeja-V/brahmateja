var teja= require('http');
teja.createServer(function (req,res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('Iam brahmateja ECE');
	res.write(req.url);
	res.end();
}).listen(5000);