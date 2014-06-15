var GOGGLES_APP = {};

var goggles = {
  UnNazi: 0,
  Nazi: 1,
  Racist: 2,
  Doge: 3,
  Demo: 4,
  Hodor: 5
};

GOGGLES_APP.state = goggles.UnNazi;

//generate regexp
GOGGLES_APP.UnNazi = {
  state: goggles.UnNazi,
  dict: grammar_words
};
var regexp = "\\b(";
for(var property in grammar_words){
  if(grammar_words.hasOwnProperty(property)){
    regexp += property + "|";
  }
}
regexp = regexp.substring(0, regexp.length - 1);
regexp += ")\\b";
GOGGLES_APP.UnNazi.regexp = regexp;

//Nazi vars
GOGGLES_APP.Nazi = {
  state: goggles.Nazi,
  dict: reverse_words
};
var regexp = "\\b(";
for(var property in reverse_words){
  if(reverse_words.hasOwnProperty(property)){
    regexp += property + "|";
  }
}
regexp = regexp.substring(0, regexp.length - 1);
regexp += ")\\b";
GOGGLES_APP.Nazi.regexp = regexp;

//Racial vars
GOGGLES_APP.Racist = {
  state: goggles.Racist,
  dict: racist_words
};
var regexp = "\\b(";
for(var property in racist_words){
  if(racist_words.hasOwnProperty(property)){
    regexp += property + "|";
  }
}
regexp = regexp.substring(0, regexp.length - 1);
regexp += ")\\b";
GOGGLES_APP.Racist.regexp = regexp;

//Doge vars
GOGGLES_APP.Doge = {
  state: goggles.Doge,
  dict: doge_words
};
var regexp = "\\b(";
for(var property in doge_words){
  if(doge_words.hasOwnProperty(property)){
    regexp += property + "|";
  }
}
regexp = regexp.substring(0, regexp.length - 1);
regexp += ")\\b";
GOGGLES_APP.Doge.regexp = regexp;

//Demo
GOGGLES_APP.Demo = {
  state: goggles.Demo, 
  dict: demo_words
};
var regexp = "\\b(";
for(var property in demo_words){
  if(demo_words.hasOwnProperty(property)){
    regexp += property + "|";
  }
}
regexp = regexp.substring(0, regexp.length - 1);
regexp += ")\\b";
GOGGLES_APP.Demo.regexp = regexp;

//Hodor
GOGGLES_APP.Hodor = {
  state: goggles.Hodor,
  dict: hodor_words
}
regexp = "\\w{1,}";
GOGGLES_APP.Hodor.regexp = regexp;


chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
     var state, regexp, dict;

     if(GOGGLES_APP.state == 0){
       state = 0;
       regexp = GOGGLES_APP.UnNazi.regexp; 
       dict = GOGGLES_APP.UnNazi.dict; 
     }else if(GOGGLES_APP.state == 1){
	state = 1;
	regexp = GOGGLES_APP.Nazi.regexp;
	dict = GOGGLES_APP.Nazi.dict;
     }else if(GOGGLES_APP.state == 2){
       state = 2,
       regexp = GOGGLES_APP.Racist.regexp,
       dict = GOGGLES_APP.Racist.dict
     }else if(GOGGLES_APP.state == 3){
       state = 3,
       regexp = GOGGLES_APP.Doge.regexp,
       dict = GOGGLES_APP.Doge.dict
     }else if(GOGGLES_APP.state == 4){
       state = 4, 
       regexp = GOGGLES_APP.Demo.regexp,
       dict = GOGGLES_APP.Demo.dict
     }else if(GOGGLES_APP.state == 5){
       state = 5,
       regexp = GOGGLES_APP.Hodor.regexp,
       dict = GOGGLES_APP.Hodor.dict
     }

      sendResponse({
        state: GOGGLES_APP.state,
	regexp: regexp,
	dict: dict
     });
});
