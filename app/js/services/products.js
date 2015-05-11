'use strict';

angular.module('mainApp', [])

.service('ProductsService', ['$resource', function($resource) {
	return $resource('api/products.json', {}, {
      query: {method:'GET'}, isArray:true});
}]);