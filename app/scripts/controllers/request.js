'use strict';

//http://stackoverflow.com/questions/18880737/how-do-i-use-rootscope-in-angular-to-store-variables
angular.module('servicefinderWebApp')
.controller('RequestCtrl', ['$scope','RequestData',function ($scope, RequestData) {
	
	$scope.doRequest = function(){
		console.debug(RequestData.getCategory());
		console.debug(RequestData.getServices());
		
		RequestData.clear();
	}
	
}]);