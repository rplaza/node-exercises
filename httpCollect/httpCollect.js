var http = require('http');
var bl = require('bl');
var url = require('url');

var uri = url.parse(process.argv[2]);

var options = {
	hostname: uri.hostname,
	port: uri.port,
	path: uri.path,
	method: 'GET'
}

var callback = function(response) {
	response.setEncoding('utf8');
	var str = '';

	response.pipe(bl(function (err, data) { 
		str += data;
	}));

	response.on('end', function () {
		console.log(str.length);
		console.log(str);
	});

}

http.request(options, callback).end();