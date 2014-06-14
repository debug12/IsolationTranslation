console.log("hello from inject.js");

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    var regexp_str = response.regexp;
    var dict = response.dict; 

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
	  return dict[match[0]][0];
	}
      });

      console.log(count + " words have been changed.");
    });

});
