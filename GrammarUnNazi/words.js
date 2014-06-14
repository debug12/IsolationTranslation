var request = require("request");
var words;
var wordsArray = [];

request("http://www.kimonolabs.com/api/c8w6goti?apikey=e476f7f5eb03cb4204125c51cbf04602", function(err, response, body) {
  words = JSON.parse(body);
  wordsArray = words.results.collection1;
  var output = parseWords(wordsArray);
  //console.log(output);
  var reverseOutput = reverseParseWords(output);
  console.log(reverseOutput);
});

var reverseParseWords = function(obj){
	var wordObj = {};
	var newObj = JSON.parse(obj);
	for(var key in newObj){
		if(newObj.hasOwnProperty(key)){
			var incorrectSpellingArray = newObj[key];
			for(var i = 0; i < incorrectSpellingArray.length; ++i){
				wordObj[incorrectSpellingArray[i]] = key;
			}
		}
	}
	return JSON.stringify(wordObj);
}

var parseWords = function(wordsArray){
	var wordObj = {};
	for(var i = 0; i < wordsArray.length; ++i){
		var stringToParse = wordsArray[i].Words.text;
		var arraySplitBySpaces = stringToParse.split(" ");
		var correctlySpelledWordKey = parseCorrectlySpelledWord(arraySplitBySpaces);

		var isPartOfExplanation = false; //bool to hackCheck
		var incorrectWordArray = [];
		for(var j = 2; j < arraySplitBySpaces.length; ++j){
			var incorrectWordToParse = arraySplitBySpaces[j];
			
			incorrectWordToParse = incorrectWordToParse.replace(/,/g, ''); //removes commas
			incorrectWordToParse = incorrectWordToParse.replace(/\[.*?\]/g, ''); //removes entries within square brackets
			
			/*
				What on earth!? You might think the following is a load of garbage code, but trust me,
				it wouldn't be this awful if wikipedia normalized their data a little bit. Ugh.
			*/
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
			if(incorrectWordToParse === '' || incorrectWordToParse == '–') {
				continue;
			}

			incorrectWordToParse = incorrectWordToParse.replace(/[()]/g, ''); //Still removes some parens that weren't caught initially
			incorrectWordArray.push(incorrectWordToParse);
		}
		wordObj[correctlySpelledWordKey] = incorrectWordArray;
	}
	return JSON.stringify(wordObj);
}

var parseCorrectlySpelledWord = function(arraySplitBySpaces){
	if(arraySplitBySpaces[1] != '–' && arraySplitBySpaces[1] != '(UK:' && arraySplitBySpaces[1] != '(as'){ //remove silly strings from wikipedia
			return arraySplitBySpaces[0] + " " + arraySplitBySpaces[1];
	}
	else {
		if(arraySplitBySpaces[0].indexOf('/') !== -1){
			return arraySplitBySpaces[0].split('/')[0];
		}
		else{
			return arraySplitBySpaces[0]
		}
	}
}