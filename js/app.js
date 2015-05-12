var myApp = angular.module('myApp', ['ngRoute', 'firebase', 'appControllers']).constant('FIREBASE_URL','https://carlog.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/garage', {
			templateUrl: 'views/garage.html',
			controller: 'GarageController'
		}).
		otherwise({
			redirectTo: '/login'
	});
}]);