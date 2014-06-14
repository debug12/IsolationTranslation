var request = require("request");
var words;
var wordsArray = [];

request("http://www.kimonolabs.com/api/c8w6goti?apikey=e476f7f5eb03cb4204125c51cbf04602", function(err, response, body) {
  words = JSON.parse(body);
  wordsArray = words.results.collection1;
  parseWords(wordsArray);
});

var parseWords = function(wordsArray){
	var cleanedWordsArray = [];
	for(var i = 0; i < wordsArray.length; ++i){
		var stringToParse = wordsArray[i].Words.text;
		var arraySplitBySpaces = stringToParse.split(" ");

		var wordObj = {
			correctlySpelledWord: "",
			incorrectlySpelledWord : []
		};
		wordObj.correctlySpelledWord = arraySplitBySpaces[0];
		
		var isPartOfExplanation = false;
		for(var j = 2; j < arraySplitBySpaces.length; ++j){
			var incorrectWordToParse = arraySplitBySpaces[j];
			
			incorrectWordToParse = incorrectWordToParse.replace(/,/g, ''); //removes commas
			incorrectWordToParse = incorrectWordToParse.replace(/\[.*?\]/g, ''); //removes entries within square brackets

			if(incorrectWordToParse.indexOf('(') !== -1){
				isPartOfExplanation = true;
				continue;
			}
			if(isPartOfExplanation === true && incorrectWordToParse.indexOf(')') === -1){
				continue;
			}
			else if(isPartOfExplanation === true && incorrectWordToParse.indexOf(')') !== -1){
				isPartOfExplanation = false;
				continue;
			}
			wordObj.incorrectlySpelledWord.push(incorrectWordToParse);
		}
		cleanedWordsArray.push(wordObj);
	}

	console.log(cleanedWordsArray);
	return cleanedWordsArray;
}