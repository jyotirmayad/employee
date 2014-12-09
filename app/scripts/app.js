'use strict';

/**
 * @ngdoc overview
 * @name employeeApp
 * @description
 * # employeeApp
 *
 * Main module of the application.
 */
var employee = angular
  .module('employeeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ]);
  employee.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LogInCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function(RestangularProvider) {
	RestangularProvider.setFullResponse(true);
	RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json; charset=iso-8859-1'});
	/*RestangularProvider.setDefaultHttpFields({
		'withCredentials': true
	});*/
	RestangularProvider.setRestangularFields({
		id: "id"
	});
	//RestangularProvider.setDefaultRequestParams('jsonp', {callback: 'JSON_CALLBACK'});
});

