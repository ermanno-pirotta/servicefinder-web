'use strict';

angular.module('servicefinderWebApp')
  .controller('AcceptQuoteCtrl', ['$scope','$state','$stateParams','RequestService',function ($scope,$state, $stateParams,RequestService) {
	  console.debug($stateParams.businessId);
	  console.debug($stateParams.quoteCreationTimestamp);
	  
	  $scope.quote = $stateParams.quote || RequestService.get({'timestamp': $stateParams.quoteCreationTimestamp});
	  
	  $scope.goToPayment = function(){
		  $state.go("business.paymentform", $stateParams);
	  }
	  
	  $scope.goToRejectQuote = function(){
		  $state.go("business.rejectquote", $stateParams);
	  }
  }]);