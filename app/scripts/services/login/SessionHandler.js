/**
 * Created by amed on 5/24/15.
 */

'use strict';


angular
    .module('sbAdminApp')
    .service('SessionHandler', SessionHandler);

    SessionHandler.$inject = ['$window', 'EXP_SESSION_TIME'];

    function SessionHandler($window, EXP_SESSION_TIME)
    {
        var service =
        {
            initSession: function (token) {
                $window.sessionStorage.token = token;
                console.log(token);
            },

            validSession: function () {
                var currToken = $window.sessionStorage.token;

                if (!angular.isUndefined(currToken) && currToken)
                {
                    var expireDate = new Date(currToken.split(/Created=/)[1].replace(/"/g, ""));
                    expireDate.setSeconds(expireDate.getSeconds() + EXP_SESSION_TIME.time);
                    var now = new Date();

                    return expireDate > now;
                }
                else
                {
                    return false;
                }
            },
            
            getToken: function () {
                return $window.sessionStorage.token;
            },

            clear: function () {
                delete $window.sessionStorage.token;
            }
        };

        return service;
    }
