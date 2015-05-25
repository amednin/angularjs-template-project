/**
 * Created by amed on 5/23/15.
 */

'use strict';


angular
    .module('sbAdminApp')
    .config(['$provide', '$httpProvider', function ($provide, $httpProvider) {

        $provide.factory('httpInterceptor', ['$rootScope', '$q', '$window', '$injector', function ($rootScope, $q, $window,  $injector) {

            //var SessionHandler;

            return {
                request: function (config) {
                    config.headers = config.headers || {};

                    if ($window.localStorage.token) {
                       //console.log($window.localStorage.token);
                       // if (angular.isUndefined(SessionHandler))
                       // {
                       //     SessionHandler = $injector.get('SessionHandler');
                       // }
                       // console.log(SessionHandler, SessionHandler.validSession());
                       // if (SessionHandler.validSession())
                       // {
                            config.headers['X-Wsse'] =  $window.localStorage.token;
                        //}
                        //else
                        //{
                        //    SessionHandler.handleExpiredSession();
                        //}
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