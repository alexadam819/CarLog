carLogApp.controller('RegistrationController',
	function ($scope, $firebaseAuth, $location, Authentication, FIREBASE_URL) {

//		$scope.reg = function(){
//			console.log("here");
//			$('#loginReg').attr("ng-include","'views/register.html'");
//		};
		
		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);
		
		$scope.login = function(){
			Authentication.login($scope.user)
			.then(function(user) {
				$location.path('/garage');
			}).catch(function(error){
				$scope.message = error.message;
			});
		};//Login
		
		
		$scope.register = function(){			
			console.log($scope.user.email);
			Authentication.register($scope.user)
			.then(function(user){
				Authentication.login($scope.user);
				$location.path('/garage');
			}).catch(function(error){
				$scope.message = error.toString();
			});
		};//Register
		
});
