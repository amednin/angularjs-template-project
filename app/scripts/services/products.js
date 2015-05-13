'use strict';

mainApp
    .factory('ProductsService', ['$resource', function($resource) {
	    return $resource('http://localhost:99/app_dev.php/api/v1/products', {},
            {'query': {method: 'GET', isArray: false}});
}]);