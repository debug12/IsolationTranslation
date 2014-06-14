console.log("hi from background"); 

var goggles = {
  UnNazi: 0,
  Nazi: 1,
  Racist: 2 
};

var state = goggles.Racist;

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
      sendResponse({
        state: state
      });
});
