/**
 * Created by amed on 5/23/15.
 */

'use strict';


angular
    .module('sbAdminApp')
    .config(['$provide', '$httpProvider', function ($provide, $httpProvider) {

        $provide.factory('httpInterceptor', ['$rootScope', '$q', '$window', '$injector', function ($rootScope, $q, $window,  $injector) {


            return {
                request: function (config) {
                    config.headers = config.headers || {};

                    if ($window.sessionStorage.token) {
                            config.headers['X-Wsse'] =  $window.sessionStorage.token;
                    }

                    return config;
                },
                response: function (response) {
                    if (response.status === 401) {
                        // handle the case where the user is not authenticated
                    }
                    return response || $q.when(response);
                },
                requestError: function (rejection) {

                    return $q.reject(rejection);
                }
            };
        }]);

        $httpProvider.interceptors.push('httpInterceptor');
    }]);