(function(){
	var checkInterval = 1000;
	var maxChecks = 10;
	var checked = 0;
	var checkId;

	document.addEventListener("CN.dart.bundleFound", function(data) {
		console.log("clearing interval ", checkId);
		 clearInterval(checkId);
	});

	function checkForCN(){
		console.log("checking");
		if (checked++ > maxChecks){
			console.log("checked enough times, stopping");
			clearInterval(checkId);
		}

		if((typeof window.CN === 'object') && window.CN.dart && window.CN.dart.bundleInfo){
		  console.log("I see bundles");

	      var event = new CustomEvent("CN.dart.bundleFound", {
	      	detail: {bundleInfo: CN.dart.bundleInfo, adLog: CN.dart.getAdLog()}});
	      document.dispatchEvent(event);	  

		}
	}

	checkId = setInterval(checkForCN, checkInterval);
})();
