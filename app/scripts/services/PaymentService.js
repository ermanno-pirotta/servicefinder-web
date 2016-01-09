var paymentService = angular.module('paymentService', []);

paymentService.factory('PaymentService', ['$http',function($http){

	var paymentUrlPrefix = "http://localhost:8080/quotes/";
	var paymentUrlPostfix = "/pay";
	
	var buildUrl= function(timestamp){
		return paymentUrlPrefix + timestamp + paymentUrlPostfix;
	}
	
	return{
		 pay: function(timestamp,params){
			 return $http.get(buildUrl(timestamp), {
	                 params: params
	             });
	    	 }
	     }
	}
]);