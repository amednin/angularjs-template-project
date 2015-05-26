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

                    if (SessionHandler.validSession()) {


                       // console.log(SessionHandler, SessionHandler.validSession());
                       if (SessionHandler.validSession())
                       {
                            config.headers['X-Wsse'] =  $window.localStorage.token;
                       }
                       else
                       {
                           SessionHandler.clear();
                           $rootScope.$broadcast('unauthorized');
                       }
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