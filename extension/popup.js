var background = chrome.extension.getBackgroundPage();
var GOGGLES_APP = background.GOGGLES_APP;

window.onload = function(){
	var UnGrammarNazi = document.getElementById("UnGrammarNazi");
	var GrammarNazi = document.getElementById("GrammarNazi");
	var Racist = document.getElementById("Racist");
	var Stupid = document.getElementById("Stupid");
	var Stupidify = document.getElementById("Stupidify");
        var Hodor = document.getElementById("Hodor");

	UnGrammarNazi.onclick = function(){
	        GOGGLES_APP.state = 0;
		chrome.tabs.reload();
	}

	GrammarNazi.onclick = function(){
	        GOGGLES_APP.state = 1;
		chrome.tabs.reload();
	}

	Racist.onclick = function(){
	        GOGGLES_APP.state = 2;
		chrome.tabs.reload();
	}

	Stupid.onclick = function(){
	        GOGGLES_APP.state = 3;
		chrome.tabs.reload();
	}

	Stupidify.onclick = function(){
	        GOGGLES_APP.state = 4;
		chrome.tabs.reload();
	}

	Hodor.onclick = function(){
		GOGGLES_APP.state = 5;
		chrome.tabs.reload();
	}
}
