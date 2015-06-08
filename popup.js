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

function activateThemeClick(e){
    var className = e.target.className;
    sendMsgToCS({
        action : 'CHANGE_THEME',
        colorCode: className
    });
}

function activateIconsClick(e){
    var className = e.target.className;
    sendMsgToCS({
        action : 'CHANGE_ICONS',
        colorCode: className
    });
}

function activateNavClick(e){
    var elem = document.getElementById('navBarPicker');
    var colorCode = elem.color.toString();
    sendMsgToCS({
        action : 'CHANGE_NAVBAR',
        colorCode: colorCode
    });
}

function closeFn() {
  window.close();
}

function activateBgClick(e){
    var elem = document.getElementById('bgPicker');
    var colorCode = elem.color.toString();
    sendMsgToCS({
        action : 'CHANGE_BGCOL',
        colorCode: colorCode
    });
}

function click(e) {
    if( e.target !== this )
        return;

    var divName = e.target.id;
    var elems = document.getElementById(divName + '_select');
    if (elems.style.display !== 'none') {
        elems.style.display = 'none';
    }
    else {
        elems.style.display = 'block';
    }
    if (divName == 'change_themes') {
        for (var i = 0; i < elems.childNodes.length; i++) {
            elems.childNodes[i].onclick = activateThemeClick;

        }
    }
    if (divName == 'change_icons') {
        for (var i = 0; i < elems.childNodes.length; i++) {
            elems.childNodes[i].onclick = activateIconsClick;

        }
    }

    if (divName == 'change_navbar') {
        for (var i = 0; i < elems.childNodes.length; i++) {
            elems.childNodes[i].onclick = activateNavClick;

        }
    }

    if (divName == 'change_bgcol') {

       // document.getElementById('popup').style.height = '300px';
        for (var i = 0; i < elems.childNodes.length; i++) {
            if (elems.childNodes[i].tagName == 'SPAN') {
                elems.childNodes[i].onclick = activateBgClick;
            }
        }
    }

}

//Tracks user icon click and registers popup window event listeners
function run() {
  
  trackEvent("iccl", "func");
  document.addEventListener('DOMContentLoaded', function() {
    try{

        document.getElementById('popup').style.width = '300px';
        document.getElementById('bgPicker').addEventListener('onclick',function(){
            alert('ok');
        });
      var closeButton = document.getElementById('close_btn');
      closeButton.onclick = closeFn;
      var divs = document.querySelectorAll('div');
      for (var i = 0;i < divs.length; i++) {
          divs[i].onclick = click;
      }
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