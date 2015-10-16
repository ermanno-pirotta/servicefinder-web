var categoryService = angular.module('categoryService', ['ngResource']);

categoryService.factory('Categories', ['$resource',
                                   function($resource){
                                     return $resource('http://localhost:8080/categories/:id');
                                   }]);