/**
 * Created by amed on 5/23/15.
 */

'use strict';

/**
 * Interceptor de los request enviados por el objeto
 * $http para poder modificar alguno de sus métodos.
 */
angular
    .module('sbAdminApp')
    .config(['$provide', '$httpProvider', function ($provide, $httpProvider) {

        $provide.factory('httpInterceptor', ['$q', '$window', '$injector', '$rootScope', function ($q, $window,  $injector, $rootScope) {

            var SessionHandler;

            return {
                /**
                 * Intercepta todos los request realizados
                 * teniendo la habilidad de poder modificar la configuración
                 * de los headers y el body.
                 * @param config
                 * @returns {*}
                 */
                request: function (config) {
                    config.headers = config.headers || {};

                    if (angular.isUndefined(SessionHandler) || !SessionHandler)
                    {
                        SessionHandler = $injector.get('SessionHandler');
                    }

                    if (SessionHandler.validSession())
                    {
                        config.headers['X-Wsse'] =  SessionHandler.getToken();
                    }

                    return config;
                },

                /**
                 * Intercepta el Response y se tiene la habilidad
                 * de capturar la respuesta y hacer algo a este punto.
                 * @param response
                 * @returns {*|Promise}
                 */
                response: function (response) {
                    if (response.status === 403) {  // Forbidden
                        // handle the case where the user is not authenticated
                        console.log(response);
                        $rootScope.$broadcast('unauthorized');
                    }

                    return response || $q.when(response);
                },

                /**
                 * Hacemos algo cuando el request no sea exitoso.
                 * @param rejection
                 * @returns {Promise}
                 */
                requestError: function (rejection) {
                    console.log(rejection);
                    return $q.reject(rejection);
                },

                /**
                 * Cuando no tengamos un response, podemos inspeccionar
                 * el motivo del rejection.
                 * @param rejection
                 */
                responseError: function (rejection) {
                    console.log(rejection);
                    $rootScope.$broadcast('unauthorized');
                }
            };
        }]);

        /**
         * Suscribimos al interceptor que hemos creado, a la lista
         * de interceptors que acepta $httpProvider.
         */
        $httpProvider.interceptors.push('httpInterceptor');
    }]);