console.log("hello from inject.js");
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    var regexp_str = response.regexp;
    var dict = response.dict; 

    console.log(regexp_str);
    $(document).ready(function(){
      var count = 0;

      findAndReplaceDOMText(document, {
	find: new RegExp(regexp_str, "g"), 
	wrap: 'strong'
      });

      findAndReplaceDOMText(document, {
	find: new RegExp(regexp_str, "g"), 
	replace: function(portion, match) {
	  count++;
	  if(response.state == 5){
            return "HODOR ";
	  }else{
	      var index = getRandomInt(0, dict[match[0].trim()].length-1);
	      return dict[match[0].trim()][index];
	  }
	}
      });

      console.log(count + " words have been changed.");
    });

});

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
