/**
 * Created by amed on 5/28/15.
 */

angular
    .module('sbAdminApp')
    .service('MenuService', ['$resource', 'API_CONFIG', function($resource, API_CONFIG) {

        var service = {
            menuData: $resource(API_CONFIG.baseUrl + '/menu/opciones', {},
                {
                    getAll: {method: 'GET'}
                }),
            menuPost: $resource(API_CONFIG.baseUrl + '/menu', {},
                {
                    create: {method: 'GET'}
                })
        };
        return service;
    }]);