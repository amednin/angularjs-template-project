/**
 * Created by amed on 5/23/15.
 */

'use strict';


angular
    .module('sbAdminApp')
    .config(['$provide', '$httpProvider', function ($provide, $httpProvider) {

        $provide.factory('httpInterceptor', ['$q', '$window', '$injector', '$rootScope', function ($q, $window,  $injector, $rootScope) {

            var SessionHandler;

            return {
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
                response: function (response) {
                    if (response.status === 403) {  // Forbidden
                        // handle the case where the user is not authenticated
                        console.log(response);
                        $rootScope.$broadcast('unauthorized');
                    }

                    return response || $q.when(response);
                },
                requestError: function (rejection) {
                    console.log(rejection);
                    return $q.reject(rejection);
                },
                responseError: function (rejection) {
                    console.log(rejection);
                    $rootScope.$broadcast('unauthorized');
                }
            };
        }]);

        $httpProvider.interceptors.push('httpInterceptor');
    }]);