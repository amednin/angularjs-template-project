'use strict';

mainApp
    .factory('ProductsService', ['$resource', function($resource) {
	    return $resource('http://localhost:99/app_dev.php/api/v1/products/:id', null,
            {
                query: {method: 'GET', isArray: false},
                update: {
                    method: 'PUT'
                },
                delete: {
                    method: 'DELETE'
                }
            });
}]);