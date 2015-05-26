/**
 * Created by amed on 5/24/15.
 */

'use strict';


angular
    .module('sbAdminApp')
    .service('SessionHandler', SessionHandler );

    SessionHandler.$inject = ['$window'];

    function SessionHandler($window)
    {
        var service =
        {
            initSession: function (token) {
                $window.sessionStorage.token = token;
            },

            validSession: function () {
                var currToken = $window.sessionStorage.token;
                if (currToken)
                {
                    var expireDate = new Date(currToken.split(/Created=/).replace(/"/g, ""));
                    var now = new Date();
                    return expireDate > now;
                }
                else
                {
                    return false;
                }
            },

            clear: function () {
                delete $window.sessionStorage.token;
            }
        };

        return service;
    }
