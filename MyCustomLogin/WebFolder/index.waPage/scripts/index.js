
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var signInBtn = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	signInBtn.click = function signInBtn_click (event)// @startlock
	{// @endlock
		var loginName = $("#userField").val();
		var thePassword = $("#passField").val();
		
		if (WAF.directory.loginByPassword(loginName, thePassword)) {
			//if user authentucates successfully, load the user table.
			$$('signInMsgText').show();
		} else {
			$$('signInMsgText').show();
			$$('signInMsgText').setValue('User not authenticated');
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("signInBtn", "click", signInBtn.click, "WAF");
// @endregion
};// @endlock
