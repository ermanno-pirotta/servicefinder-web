var categoryService = angular.module('businessService', ['ngResource']);

categoryService.factory('Business', ['$resource',
                                   function($resource){
                                     return $resource('http://localhost:8080/businesses/:id');
                                   }]);