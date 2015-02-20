var module = require('./makeItModularModule');

module(process.argv[2],process.argv[3],callback);

function callback(err, data) {
	if(!err){
		var item;
		var i = 0;
		var total = data.length;
		while (i < total){
			item = data.splice(0,1);
			console.log(item[0]);
			i++;
		}
	}
}
