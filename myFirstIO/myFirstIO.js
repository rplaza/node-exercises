var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var fileString = buffer.toString();

var lines = fileString.split("\n");
console.log(lines.length - 1);