// Message bg for tracking
function trackEvent(actionName, actionType, properties) {
    chrome.runtime.sendMessage({
        action: 'TRACK_EVENT',
        actionName: actionName,
        actionType: actionType,
        properties: properties
    });
}

// Message bg for error tracking
function trackError(e, number) {
    chrome.runtime.sendMessage({
        action: 'ERROR',
        errorNumber: number,
        errorMessage: e.message,
        errorName: e.name
    });
}

//Send message to current tab content script
function sendMsgToCS(message) {
   chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        try {
            tabs.forEach(function(t) {
                chrome.tabs.sendMessage(t.id, message);
            });
        } catch (e39) {
            trackError(e39, 39);
        }
    });
}

function click(e) {
  var colorCode = e.target.id;
  
  sendMsgToCS({
    action : 'COLOR_PAGE',
    colorCode: 'red'
  });
  window.close();
}
//Tracks user icon click and registers popup window event listeners
function run() {
  
  trackEvent("iccl", "func");
  document.addEventListener('DOMContentLoaded', function() {
    console.log("ici");
    try{
      var divs = document.querySelectorAll('div');
      for (var i = 0;i < divs.length; i++) {
	divs[i].onclick = click;			   
      }
      //do some dummy operation
      console.log('test 0.1');
    } catch (e35) {
      trackError(e35, 35);
      
    }
    
  });
  
  
}

try {
  run();
} catch (e40) {
  trackError(e40, 40);
}