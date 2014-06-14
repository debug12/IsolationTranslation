var GOGGLES_APP = {};

var goggles = {
  UnNazi: 0,
  Nazi: 1,
  Racist: 2 
};

GOGGLES_APP.state = goggles.UnNazi;

//generate regexp
GOGGLES_APP.UnNazi = {
  state: goggles.UnNazi,
  dict: grammar_words
};
var regexp = "";
for(var property in grammar_words){
  if(grammar_words.hasOwnProperty(property)){
    regexp += property + "|";
  }
}
regexp = regexp.substring(0, regexp.length - 1);
GOGGLES_APP.UnNazi.regexp = regexp;

GOGGLES_APP.Nazi = {
  state: goggles.Nazi,
  dict: reverse_words
};
var regexp = "";
for(var property in reverse_words){
  if(reverse_words.hasOwnProperty(property)){
    regexp += property + "|";
  }
}
regexp = regexp.substring(0, regexp.length - 1);
GOGGLES_APP.Nazi.regexp = regexp;

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
     var state, regexp, dict;

     if(GOGGLES_APP.state == 0){
       state = 0;
       regexp = GOGGLES_APP.UnNazi.regexp; 
       dict = GOGGLES_APP.UnNazi.dict; 
     }else if(GOGGLES_APP.state == 1){
	states = 1;
	regexp = GOGGLES_APP.Nazi.regexp;
	dict = GOGGLES_APP.Nazi.dict;
     }

      sendResponse({
        state: GOGGLES_APP.state,
	regexp: regexp,
	dict: dict
      });
});
