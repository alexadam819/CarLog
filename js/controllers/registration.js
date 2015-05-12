myApp.controller('RegistrationController', function($scope, $firebaseSimpleLogin, $location, Authentication){
	$scope.login = function(){
		Authentication.login($scope.user)
		.then(function(user){
			$location.path('/garage');
		}, function(error){
			$scope.message = error.toString();
		});
	}; //login
	
	$scope.register = function(){
		console.log($scope.user);
		Authentication.register($scope.user)
		.then(function(user){
			Authentication.login($scope.user);
			$location.path('/garage');
		}, function(error){
			$scope.message = error.toString();
		});
	};//register
});