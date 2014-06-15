var request = require('request');
var words;
var wordsArray = [];

request("http://www.kimonolabs.com/api/801j35rc?apikey=e476f7f5eb03cb4204125c51cbf04602", 
	function(err, response, body) {
  		words = JSON.parse(body);
  		wordsArray = words.results.collection1;
  		var object = parseWords(wordsArray);
  		console.log(object);
});

var parseWords = function(wordsArray){
	var wordObj = {};
	for(var i = 0; i < wordsArray.length; ++i){
		var noun = wordsArray[i].words.text;
		if(noun === "Word") continue;
		var nounArray = []; //some population logic;
		wordObj[noun] = nounArray;
	}
	return JSON.stringify(wordObj);
}