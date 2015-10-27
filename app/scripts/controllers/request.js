'use strict';

//http://stackoverflow.com/questions/18880737/how-do-i-use-rootscope-in-angular-to-store-variables
angular.module('servicefinderWebApp')
.controller('RequestCtrl', ['$scope','RequestData','RequestService',function ($scope, RequestData, RequestService) {
	
	$scope.category = RequestData.getCategory();
	$scope.services = RequestData.getServices();
	
	$scope.submit = function(){
		var requestJson = $scope.fields;
		requestJson.categoryName = $scope.category;
		requestJson.requestedService = $scope.services;
		
		if(requestJson.categoryName && requestJson.requestedService){
			RequestService.save(requestJson, function(successData){
				console.debug(successData);
			},
			function(errorData){
				console.debug(errorData);
			});
		}
		
		RequestData.clear();
	};
	
	 $scope.$on("$destroy", function(){
		 RequestData.clear();
	  });
	
}]);