/**
 * Created by amed on 5/24/15.
 */

'use strict';

/**
 * Servicio que hace la llamada a la api de autenticación
 */
angular
    .module('sbAdminApp')
    .factory('AuthenticationService', ['$resource', 'API_CONFIG', 'SessionHandler', function($resource, API_CONFIG, SessionHandler) {

        var service = {
            /**
             * Función que emplea un $resource para comunicarse con la API
             */
            authenticate: $resource(API_CONFIG.baseUrl + '/token?username=:username&password=:password', {},
                {
                    login: {method: 'GET'}
                }),

            /**
             * Hace un chequeo contra la api para validar el token obtenido en la anterior llamada.
             */
            verifyValidToken: $resource(API_CONFIG.baseUrl + '/check', {},
                {
                    check: {methog: 'GET'}
                }),

            /**
             * Inicia la session
             * @param token
             */
            initSession: function (token) {
                SessionHandler.initSession(token);
            },

            /**
             * Finaliza la sessión, podría usarse con un Logout view.
             */
            endSession: function () {
                SessionHandler.clear();
            }
        };
        return service;
    }]);