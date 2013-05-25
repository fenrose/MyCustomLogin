
function userLogin(userName, password) {
	var myUser = ds.User({userName:userName});
	if (myUser == null) {
		//userName was not found in User class 
		//Wakanda directory will authenticate user
		return false;
	} else {
		//Our custom validatePassword function on the User class will authenticate user
		if (myUser.validatePassword(password)) {
			var theGroups = [];
			switch (myUser.accessType) {
				case 1:
				theGroups = ['Admin'];
				break;
				
				case 2:
				theGroups = ['Visitor'];
				break;		
			}
			
			var connectTime =  new Date();
			return {
				ID: myUser.ID,
				name: myUser.userName,
				belongsTo: theGroups,
				storage: {time: connectTime}
			}
		} else {
			return {error: 1024, errorMessage: "Invalid login."};}
		}
}


