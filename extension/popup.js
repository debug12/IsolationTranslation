var background = chrome.extension.getBackgroundPage();
var GOGGLES_APP = background.GOGGLES_APP;

window.onload = function(){
	var UnGrammarNazi = document.getElementById("UnGrammarNazi");
	var GrammarNazi = document.getElementById("GrammarNazi");
	var Racist = document.getElementById("Racist");
	var Stupid = document.getElementById("Stupid");

	UnGrammarNazi.onclick = function(){
	        GOGGLES_APP.state = 0;
	}

	GrammarNazi.onclick = function(){
	        GOGGLES_APP.state = 1;
	}

	Racist.onclick = function(){
	        GOGGLES_APP.state = 2;
	}

	Stupid.onclick = function(){
	        GOGGLES_APP.state = 3;
	}
}
