
var fs = require('fs');

fs.readFile(process.argv[2], callback);

function callback (err, data) {
	if(!err) {
		var file = data.toString();
		var lines = file.split('\n');
		console.log(lines.length - 1);
	}
}