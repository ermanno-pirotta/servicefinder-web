'use strict';

/**
 * @ngdoc function
 * @name servicefinderWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the servicefinderWebApp
 */
angular.module('servicefinderWebApp')
  .controller('CategoryCtrl', ['$scope','Categories',function ($scope, Categories) {
	  $scope.categories = Categories.query();
  }]);
