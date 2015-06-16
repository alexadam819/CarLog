var carLogApp = angular.module('carLogApp', ['ngRoute',
									 'firebase',
									 'appControllers']).constant('FIREBASE_URL', 'https://carlog.firebaseio.com/');
									 
var appControllers = angular.module('appControllers', ['firebase']);
									 
 carLogApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'views/home.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
//		when('/checkins/:uId/:mId', {
//			templateUrl: 'views/checkins.html',
//			controller: 'CheckInsController'
//		}).
//		when('/checkins/:uId/:mId/checkinsList', {
//			templateUrl: 'views/checkinslist.html',
//			controller: 'CheckInsController'
//		}).
		when('/garage', {
			templateUrl: 'views/garage.html',
//			controller: 'MeetingsController',
//			resolve : {
//				currentAuth : function(Authentication){
//					return Authentication.requireAuth();
//				}
//			}  
		}).
		otherwise({
			redirectTo: '/'
		});
}]);