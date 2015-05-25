/**
 * Created by amed on 5/24/15.
 */

'use strict';

angular
    .module('sbAdminApp')
    .factory('AuthenticationService', ['$resource', 'API_CONFIG', 'SessionHandler', function($resource, API_CONFIG, SessionHandler) {

        var service = {
            authenticate: $resource(API_CONFIG.baseUrl + '/token?username=:username&password=:password', {},
                {
                    login: {method: 'GET'}
                }),
            initSession: function (token) {
                SessionHandler.initSession(token, 'dashboard.home');
            }
        };
        return service;
    }]);