'use strict';

angular.module('servicefinderWebApp')
  .controller('PaymentCtrl', ['$scope','$state','$stateParams','PaymentService',function ($scope,$state, $stateParams, PaymentService) {
	  $scope.paymentError = null;
	  $scope.apiErrorMessage = null;
	  
	  $scope.PaymillResponseHandler = function(error, result) {
          if (error) {
        	  $scope.paymentError = {"apiError" : true};
              $scope.apiErrorMessage = error.apierror;
          } else {
              
              var paymentData = {
             	"businessId" : $stateParams.businessId,
             	"token"		 :result.token
              }
              
              PaymentService.pay($stateParams.quoteCreationTimestamp, paymentData)
              .then(function successCallback(response) {
            	  $state.go("business.paymentsuccess", {quote: response.data});  
        	  }, function errorCallback(response) {
        	    alert("payment error!");
        	  });
              
              
          }
      }

	  
	  $scope.submit = function(){
		  $scope.paymentError = null;
		  if (false === paymill.validateCardNumber($('.card-number').val())) {
			  $scope.paymentError = {"invalidCardNumber":true};
			  return false;
		  }
		  
		  var expiry = $('.card-expiry').val();
		  expiry = expiry.split("/");
		  if(expiry[1] && (expiry[1].length <= 2)){
			  expiry[1] = '20'+expiry[1];
		  }
		  if (false === paymill.validateExpiry(expiry[0], expiry[1])) {
			  $scope.paymentError = {"invalidCardExpirityDate":true};
			  return false;
		  }
		  
          if (false === paymill.validateHolder($('.card-holdername').val())) {
        	  $scope.paymentError = {"invalidCardHolder":true};
        	  return false;
          }
          if ((false === paymill.validateCvc($('.card-cvc').val()))) {
              if(VALIDATE_CVC){
            	  $scope.paymentError = {"invalidCardCVC":true};
            	  return false;
              } else {
                  $('.card-cvc').val("000");
              }
          }

          var params = {
              amount_int:     parseInt($('.amount').val().replace(/[\.,]/, '.') * 100),  // E.g. "15" for 0.15 Eur
              currency:       $('.currency').val(),    // ISO 4217 e.g. "EUR"
              number:         $('.card-number').val(),
              exp_month:      expiry[0],
              exp_year:       expiry[1],
              cvc:            $('.card-cvc').val(),
              cardholder:     $('.card-holdername').val()
          };

          paymill.createToken(params, $scope.PaymillResponseHandler);          
	  }
  }]);