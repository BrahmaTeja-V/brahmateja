var fs=require('fs');
fs.appendFile('apple.txt','Hello', function(err){
	if (err) throw err;
	console.log('Updated!');
});