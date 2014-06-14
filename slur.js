var request = require('request');

request("http://www.kimonolabs.com/api/75yzw5oi?apikey=e476f7f5eb03cb4204125c51cbf04602", function(e, res, body){
	var JSONSlur = JSON.parse(body);
    console.log(JSONSlur.results.collection1.length);
});
