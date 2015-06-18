carLogApp.factory('Authentication', function($firebase,
	$firebaseAuth, $rootScope, $routeParams, $location, FIREBASE_URL){
		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);
		
		auth.$onAuth(function(authUser){
			if(authUser){
				var ref = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
				var user = $firebase(ref).$asObject();
				$rootScope.currentUser = user;
			}else{
				$rootScope.currentUser = '';
			};
		});
		
		var myObject = {
			login: function(user){
				console.log("authentication factory login");
				return auth.$authWithPassword({
					email:user.email,
					password: user.password
				});//authWithPassword
			},//Login
			
			register: function(user){
				console.log("authentication factory register");
				return auth.$createUser({
					email: user.email,
					password: user.password
				}).then(function(regUser){
					var ref = new Firebase(FIREBASE_URL + 'users/');
					var firebaseUsers = $firebase(ref);
					
					var userInfo = {
						date : Firebase.ServerValue.TIMESTAMP,
						regUser : regUser.uid,
						firstname : user.firstname,
						email : user.email
					};//user info
					
					firebaseUsers.$set(regUser.uid, userInfo);
				});
			},
			
			requireAuth: function() {
				return auth.$requireAuth(); 
			},//require Authentication
			
			waitForAuth: function() {
				return auth.$waitForAuth(); 
			} //Wait until user is Authenticated
		};
		return myObject;
	});
