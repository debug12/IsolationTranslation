var words;
var wordsArray;

request("http://www.kimonolabs.com/api/75yzw5oi?apikey=e476f7f5eb03cb4204125c51cbf04602", function(e, res, body){
	Words = JSON.parse(body);
	wordsArray = words.results.collection1;
});
