var paymentService = angular.module('paymentService', []);

paymentService.factory('PaymentService', ['$http',function($http){

	var paymentUrlPrefix = "http://localhost:8080/businesses/";
	var paymentUrlPostfix = "/pay";
	
	var buildUrl= function(businessId){
		return paymentUrlPrefix + timestamp + paymentUrlPostfix;
	}
	
	return{
		 pay: function(businessId,params){
			 return $http.get(buildUrl(businessId), {
	                 params: params
	             });
	    	 }
	     }
	}
]);