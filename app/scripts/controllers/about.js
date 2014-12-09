'use strict';

/**
 * @ngdoc function
 * @name employeeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the employeeApp
 */
angular.module('employeeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
