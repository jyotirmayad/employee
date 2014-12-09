'use strict';

/**
 * @ngdoc function
 * @name employeeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the employeeApp
 */
angular.module('employeeApp')
  .controller('LogInCtrl', function ($scope, Restangular, loginSevice) {
    $scope.login = {};
    
    //call the login function
    $scope.doLogin = function() {
      // check to make sure the form is completely valid
      if($scope.loginForm.$invalid) {
        $scope.loginForm.username.$dirty = true;
        $scope.loginForm.password.$dirty = true;    
      }else{
        loginSevice.sendLoginCredentials($scope, Restangular); 
      }
    };
  });
