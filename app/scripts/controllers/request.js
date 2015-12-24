'use strict';

//http://stackoverflow.com/questions/18880737/how-do-i-use-rootscope-in-angular-to-store-variables
angular.module('servicefinderWebApp')
.controller('RequestCtrl', ['$scope','$state','RequestData','RequestService',function ($scope, $state, RequestData, RequestService) {
	
	$scope.category = RequestData.getCategory();
	$scope.services = RequestData.getServices();
	
	$scope.submit = function(){
		var requestJson = $scope.fields;
		requestJson.categoryName = $scope.category;
		requestJson.requestedServices = $scope.services;
		
		if(requestJson.categoryName && requestJson.requestedServices){
			RequestService.save(requestJson, function(successData){
				//console.debug(successData);
				$state.go('user.thankyou');
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