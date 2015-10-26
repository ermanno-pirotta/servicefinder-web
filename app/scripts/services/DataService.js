var dataService = angular.module('dataService',[]);

dataService.factory('RequestData', function () {

    var requestServices = [];
    var requestCategory = "";

    return {
    	setCategory: function(category){
    		requestCategory = category;
    	},
    	getCategory: function(){
    		return requestCategory;
    	},
        addService: function (service) {
            requestServices.push(service);
        },
        getServices: function () {
            return requestServices;
        },
        
        clear:function(){
        	requestServices = [];
        	requestCategory = "";
        }
    };
});