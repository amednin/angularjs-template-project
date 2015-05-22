/**
 * Created by amed on 5/21/15.
 */
'use strict';

angular
    .module('sbAdminApp')
    .factory('AutenticacionService', ['$resource', 'API_CONFIG', function($resource, API_CONFIG) {
        this.token = null;
        this.created = "";

        var service = {
            getToken: $resource(API_CONFIG.baseUrl + '/token?username=:username&password=:password', {

                },
                {
                    get: {method: 'GET'}
                }),
            setToken: function (nuevoToken) {
                this.token = nuevoToken
            },
            token: this.token,
            getCreated: function () {
                this.created = this.token.split(/Created=/);

                return this.created[1];
            }
        };
        return service;
    }]);
