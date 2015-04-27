
var bundleInfoDB = {};

function saveBundleInfo(sender, data){
	var key = sender.tab.windowId + "-" + sender.tab.id;
	bundleInfoDB[key] = data;
}

function onMessage(request, sender, sendResponse) {

	console.log("got a message", request.type, sender);
	console.log(request.data);
	if("CN.dart.bundleFound" === request.type){
		saveBundleInfo(sender, request.data);
		chrome.pageAction.show(sender.tab.id);
	}
	if("info" === request.type){
		console.log(request.data, sender.tab.url);
	}
	// Need to send back empty object to clear out connection
    sendResponse({});
};

// Listen for the content script to send a message to the background page.
chrome.runtime.onMessage.addListener(onMessage);

