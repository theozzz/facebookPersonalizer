// background.js

// Called when the user clicks on the browser action.
/*chrome.browserAction.onClicked.addListener(function(tab) {
 // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});*/

var extensionConsts = {
    colorPersistence: true,
    extensionName: "facebook_personalizer",
    extensionDomains: ["facebook.com"]
};
 
// Register extension functionality events
function runExtensionSpecificBg() {
    console.log('ici in bg');
    console.log(request.action);
    try {
        // Listen for events from content and popup scripts and send for tracking
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            try {
                switch (request.action) {
                    case 'SHOW_PAGE_ACTION':
                        chrome.pageAction.show(sender.tab.id);
                        break;
                    case 'THEME_CHANGED':

                    case 'COLOR_SELECTED_FROM_POPUP':
                        if (extensionConsts.colorPersistence)
                            persistValue("colorCode", request.color);
                        trackEvent("cocl", "func", {
                            co: request.color
                        });
                        break;
                    case 'GET_COLOR':
                        sendResponse({
                            colorCode: loadValue("colorCode")
                        });
                        break;
                }
            } catch (e32) {
                trackError(32, e32.message, e32.name);
            }
        });
    } catch (e31) {
        trackError(31, e31.message, e31.name);
    }
}

// Keeps the value in both state object and local storage
function persistValue(name, value) {
    var type = getTypeName(value, true);
    var codedName = name;
    if (type == 'object') {
        codedName = 'o_' + name;
        localStorage[codedName] = JSON.stringify(state[name] = value);
    } else {
        switch (type) {
            case 'string':
                codedName = 's_' + name;
                break;
            case 'number':
                codedName = 'n_' + name;
                break;
            case 'date':
                codedName = 'd_' + name;
                break;
            case 'boolean':
                codedName = 'b_' + name;
                break;
        }
        localStorageSnapshot[codedName] = localStorage[codedName] = state[name] = value;
    }
}

// Loads value from local storage by property name
function loadValue(name) {
    if (typeof state[name] == 'undefined') {

        var lsStr;
        if (lsStr = localStorage['s_' + name]) {
            state[name] = lsStr;
        } else if (lsStr = localStorage['n_' + name]) {
            state[name] = parseFloat(lsStr);
        } else if (lsStr = localStorage['o_' + name]) {
            state[name] = JSON.parse(lsStr);
        } else if (lsStr = localStorage['d_' + name]) {
            state[name] = new Date(Date.parse(lsStr));
        } else if (lsStr = localStorage['b_' + name]) {
            if (lsStr === 'false') lsStr = '';
            state[name] = Boolean(lsStr);
        }
    }
    return state[name];
}