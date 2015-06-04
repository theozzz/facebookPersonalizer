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
 
    try {
        // Listen for events from content and popup scripts and send for tracking
        chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
            try {
                switch (request.action) {
                    case 'SHOW_PAGE_ACTION':
                        chrome.pageAction.show(sender.tab.id);
                        break;
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