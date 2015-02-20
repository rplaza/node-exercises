var fs = require('fs');
var path = require('path');

module.exports = filterFiles;

function filterFiles(directory, extension, callback) {
	fs.readdir(directory, function(err, list){
		if(err){
			return callback(err,null);
		}
		var data = list.filter(function(file){
			return path.extname(file) === '.'+extension;
		});
		return callback(null,data);
	});
}