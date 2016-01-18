// define controller for wizard
angular.module('servicefinderWebApp')
.controller('BusinessRegistrationController', ['$scope','$state', '$q', '$timeout','Categories', 'Business', function ($scope,$state, $q, $timeout,Categories, Business) {
  
  $scope.user = {};
  
  $scope.categories = Categories.query();
  
  var fields = {};
  var states = $("form");
  var wizardBadges= $(".rc-nav-wizard li");
  
  var hideStep = function(stateIndex){
	  $(states[stateIndex]).hide();
	  $(wizardBadges[stateIndex]).removeClass("active");
  }
  
  var showStep = function(stateIndex){
	  $(states[stateIndex]).show();
	  $(wizardBadges[stateIndex]).addClass("active");
  }
  
  var getCategoryForRegistration = function(fields){
	 fields["categoryId"] = fields.category.id;
  }
  
  var filterServicesForRegistration = function(fields){
	var providedServices = [];
	$.each($("input:checked"), function(key, service){
		providedServices.push($(service).val());
	});
	fields["providedServices"] = providedServices;
  }
  
  var prepareFieldsForRegistration = function(fields){
	  getCategoryForRegistration(fields);
	  filterServicesForRegistration(fields);
	  delete fields["category"];
  }
  
  $scope.navigationLength=states.length -1;
  $scope.currentStateIndex = 0;
  
  $scope.saveState = function() {
    for (var key in this.fields) {
	  if (this.fields.hasOwnProperty(key)) {
	   fields[key] = this.fields[key];
	  }
	}
  };
  
  $scope.back = function(){
	  if($scope.currentStateIndex > 0){
		  this.saveState();
		  hideStep($scope.currentStateIndex);
		  $scope.currentStateIndex--;  
		  showStep($scope.currentStateIndex);
	  }
  }
  
  $scope.next = function(){
	  if($scope.currentStateIndex < $scope.navigationLength){
		  this.saveState();
		  hideStep($scope.currentStateIndex);
		  $scope.currentStateIndex++;  
		  showStep($scope.currentStateIndex);
	  }
  };
  
  $scope.register = function(fields){
	  Business.save(fields, function(successData){
		 $state.go('business.registrationsuccess');
	  });
  }
  
  $scope.completeWizard = function() {
	  prepareFieldsForRegistration(this.fields);
	  $scope.register(this.fields);
  }
  
  $scope.displayServicesForCategory = function(category){
	  $scope.category = category;
  }
}]);