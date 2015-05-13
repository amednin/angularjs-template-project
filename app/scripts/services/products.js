'use strict';

mainApp
    .factory('ProductsService', ['$resource', function($resource) {
	return $resource('https://api.github.com/repos/angular/angular.js/issues');
}]);