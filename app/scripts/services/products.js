'use strict';

mainApp
    .factory('ProductsService', ['$resource', 'API_CONFIG', function($resource, API_CONFIG) {
        var service = {
            products: $resource(API_CONFIG.baseUrl + '/products/:id', null,
                {
                    query: {method: 'GET', isArray: false},
                    update: {
                        method: 'PUT'
                    },
                    delete: {
                        method: 'DELETE'
                    }
                }),
            menu_options: $resource(API_CONFIG.baseUrl + '/menu/opciones/:id', null,
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