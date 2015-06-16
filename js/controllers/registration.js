carLogApp.controller('RegistrationController',
	function ($scope, $firebaseAuth, $location, FIREBASE_URL) {

		$scope.reg = function(){
			console.log("here");
			$('#loginReg').attr("ng-include","'views/register.html'");
		};
		
});