carLogApp.controller('GarageController',
	function ($scope, $location, Authentication, FIREBASE_URL) {
	
		$scope.addCar = function(){
			console.log("Add Car");
			$location.path('/garage/addcar');
		};//Takes user the add car form
		
		$scope.addCarForm = function(){
			console.log($scope.car);
		};//Submitting the car registration form
	
});