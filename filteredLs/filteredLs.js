
var fs = require('fs');
var extension = '.' + process.argv[3];

fs.readFile(process.argv[2],callback);

function callback(err, data) {
	if(!err) {
		data.filter(function(file) {
			if(file)
		})
	}	
} 