'use strict';

mainApp
    .factory('ProductsService', ['$resource', function($resource) {
        var service = {
            products: $resource('http://localhost:99/app_dev.php/api/v1/products/:id', null,
                {
                    query: {method: 'GET', isArray: false},
                    update: {
                        method: 'PUT'
                    },
                    delete: {
                        method: 'DELETE'
                    }
                }),
            menu_options: $resource('http://localhost:99/app_dev.php/api/v1/menu/opciones/:id', null,
                {
                    query: {method: 'GET', isArray: false},
                    update: {
                        method: 'PUT'
                    },
                    delete: {
                        method: 'DELETE'
                    }
                })
        };
	    return service;
}]);