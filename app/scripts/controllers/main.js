'use strict';

/**
 * @ngdoc function
 * @name servicefinderWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the servicefinderWebApp
 */
angular.module('servicefinderWebApp')
  .controller('MainCtrl', ['$scope','Categories','Suggestions',function ($scope, Categories, Suggestions) {
	  $scope.categories = Categories.query();
	  $scope.suggestions = Suggestions.query();
}]);
