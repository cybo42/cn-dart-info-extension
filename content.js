document.addEventListener("CN.dart.bundleFound", function(event) {
    chrome.runtime.sendMessage({type: "CN.dart.bundleFound", data: event.detail});
});


var iscript = document.createElement('script');
// TODO: add "injected_script.js" to web_accessible_resources in manifest.json
iscript.src = chrome.extension.getURL('injected_script.js');
iscript.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(iscript);

// chrome.runtime.sendMessage({type: "info", data: "injecting script"});
