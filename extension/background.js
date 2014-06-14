var GOGGLES_APP = {};

var goggles = {
  UnNazi: 0,
  Nazi: 1,
  Racist: 2 
};

GOGGLES_APP.state = goggles.Racist;

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
      sendResponse({
        state: GOGGLES_APP.state
      });
});
