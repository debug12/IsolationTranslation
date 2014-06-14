console.log("hello from inject.js");

$(document).ready(function(){
  findAndReplaceDOMText(document, {
    find: /girl|Girl/g, 
    replace: function(portion, match) {
	console.log('cmon');
      return 'bitch';
    }
  });
});
