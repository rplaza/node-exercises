var http = require('http');
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

	response.on('data', function (chunk) {
		console.log(chunk);
	});

}

http.request(options, callback).end();