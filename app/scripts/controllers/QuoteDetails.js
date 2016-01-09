'use strict';

angular.module('servicefinderWebApp')
  .controller('QuoteDetailsCtrl', ['$scope','$stateParams',function ($scope, $stateParams) {
	  $scope.quote = $stateParams.quote;
  }]);