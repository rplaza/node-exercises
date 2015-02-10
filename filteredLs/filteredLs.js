
var fs = require('fs');
var path = require('path');
var extension = '.' + process.argv[3];

fs.readdir(process.argv[2],callback);

function callback(err, list) {
	if(!err) {
		list.filter(function(file) {
			if(path.extname(file) == extension) {
				console.log(file);	
			}
		})
	}	
} 
