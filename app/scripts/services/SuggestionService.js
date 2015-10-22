var suggestionService = angular.module('suggestionService', ['ngResource']);

suggestionService.factory('Suggestions', ['$resource',
                                   function($resource){
                                     return $resource('http://localhost:8080/search/services/autocomplete');
                                   }]);