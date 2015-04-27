
var app =  angular.module("app", []);

app.controller("AdBundleController", ["$scope", function($scope){
	var bg = chrome.extension.getBackgroundPage();

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		var key = tabs[0].windowId + "-" + tabs[0].id;
		function isStale(info){
			// 93600000  = 26 hours
			return ((Date.now() - info.bundleInfo.builtOnTS) > 93600000);
		}

		$scope.$apply(function(){
			var info = bg.bundleInfoDB[key];
			$scope.tab = key;
	        $scope.info = info;
	        $scope.staleBundle = isStale(info);
		});
	});
}]);


