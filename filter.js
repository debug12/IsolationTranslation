var fs = require('fs');

var filter = function(filename){
	console.log(filename);
	fs.readFile(filename, 'utf-8', function(e, data){
		var newObj = JSON.parse(data);
		for(var key in newObj){
			if(newObj.hasOwnProperty(key)){
				for(var i = 0; i < newObj[key].length; ++i){
					if(newObj[key][i].indexOf("Nigger") != -1){
						newObj[key].splice(i, 1);
						i--;
					}
				} 
			}
		}
		var split_name = filename.split('/')[2].split('.')[0];
		split_name += "_words = ";

		fs.writeFileSync(filename, "var " + split_name + JSON.stringify(newObj), 'utf-8');
	});
}

var filename = process.argv[2]
filename = "./extension/"+ filename;
filter(filename);