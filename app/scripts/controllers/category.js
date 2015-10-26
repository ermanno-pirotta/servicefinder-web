'use strict';

/**
 * @ngdoc function
 * @name servicefinderWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the servicefinderWebApp
 */
angular.module('servicefinderWebApp')
  .controller('CategoryCtrl', ['$scope','Categories','RequestData',function ($scope, Categories, RequestData) {
	  $scope.categories = Categories.query();
	  
	  $scope.addToRequest = function(){
		  RequestData.setCategory(this.category.name);
		  RequestData.addService(this.service);
	  }
  }]);
