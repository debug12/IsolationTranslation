var request = require('request');
var words;
var wordsArray;

request("http://www.kimonolabs.com/api/75yzw5oi?apikey=e476f7f5eb03cb4204125c51cbf04602", function(e, res, body){
	Words = JSON.parse(body);
	wordsArray = words.results.collection1;
});

exports.getWordsByRace = function(race){ //returns the array
	var wordsByRace;
	for(var i = 0; i < wordsArray.length; ++i){
		if(wordsArray.Race.text == race){
			wordsByRace.push(wordsArray[i]);
		}
	}
	return wordsByRace;
}

var randomNumberBetweenOneAnd2500 = function(){
	return Math.floor((Math.random() * 2500) + 1);
}

exports.getRandomSlur = function(){ //returns only the object
	var randomSlur;
	var randomNumber = randomNumberBetweenOneAnd2500();
	randomSlur.Slur = wordsArray[randomNumber].Slur.text;
	randomSlur.Race = wordsArray[randomNumber].Race.text;
	randomSlur.Origin = wordsArray[randomNumber].Reason.text;
	return randomSlur;
}