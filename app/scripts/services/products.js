'use strict';

mainApp
    .factory('ProductsService', ['$resource', 'API_CONFIG', function($resource, API_CONFIG) {
        var service = {

            /**
             * Función del servicio que devuelve los productos como objetos JSON.
             * Con diferentes endpoints para comunicarse con la API.
             */
            products: $resource(API_CONFIG.baseUrl + '/products/:id', null,
                {
                    query: {method: 'GET', isArray: true},
                    update: {
                        method: 'PUT'
                    },
                    delete: {
                        method: 'DELETE'
                    }
                }),
            /**
             * Funci´øn del servicio para obtener los menus.
             */
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