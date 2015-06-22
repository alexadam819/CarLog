carLogApp.controller('GarageController',
	function ($scope, $rootScope, $firebase, $location, Authentication, FIREBASE_URL) {
	
		var ref = new Firebase(FIREBASE_URL + '/users/' +
		 $rootScope.currentUser.$id + '/cars');
		 
		var carsInGarage = $firebase(ref);
		var garageObj = carsInGarage.$asObject();
	
		garageObj.$loaded().then(function(data){
			$scope.cars = data;
		});
		
		
	
		$scope.addCar = function(){
			console.log("Add Car");
			console.log($rootScope.currentUser);
			$location.path('/garage/addcar');
		};//Takes user the add car form
		
		$scope.addCarForm = function(){
			console.log("Hello");
			carsInGarage.$push({
				make: $scope.make,
				model: $scope.model,
				year: $scope.year,
				ownershipDate: $scope.ownershipDate,
				vin: $scope.vin,
				color: $scope.color
			}).then(function(){
				$location.path('/garage');
			});	
		};//Submitting the car registration form
	
	
			
	$scope.deleteMeeting = function(key){
		meetingsInfo.$remove(key);
	};	

	
	
	
	
});
