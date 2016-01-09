var requestService = angular.module('requestService', ['ngResource']);

requestService.factory('RequestService', ['$resource',
                                   function($resource){
                                     return $resource('http://localhost:8080/quotes/:timestamp');
                                   }]);