var request = require('request');

var words;
var wordsArray;

request("http://www.kimonolabs.com/api/75yzw5oi?apikey=e476f7f5eb03cb4204125c51cbf04602", function(e, res, body){
	words = JSON.parse(body);
	wordsArray = words.results.collection1;
	var object = parseWords(wordsArray);
	console.log(object);
});

var parseWords = function(wordsArray){
	wordsArray.sort(function(a, b){
		return a.Race.text > b.Race.text;
	}); //sorts by race name
	var wordObj = {};
	var wordList = [];
	for(var i = 0; i < wordsArray.length; ++i){
		var race = wordsArray[i].Race.text;
		if(wordObj.hasOwnProperty(race)){
			wordObj[race].push(wordsArray[i].Slur.text);
		}else{
			wordObj[race] = [wordsArray[i].Slur.text];
		}
	}
	return JSON.stringify(wordObj);
}