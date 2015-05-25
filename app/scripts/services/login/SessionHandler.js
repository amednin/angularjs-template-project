/**
 * Created by amed on 5/24/15.
 */

'use strict';


angular
    .module('sbAdminApp')
    .service('SessionHandler', ['$window', '$state', function ($window, $state) {
        var service =
        {
            initSession: function (token, redirect) {
                $window.sessionStorage.token = token;
                $state.go(redirect);
            },

            validSession: function () {
                var currToken = $window.sessionStorage.token;
                console.log(currToken);
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

            handleExpiredSession: function () {
                if (!angular.isUndefined($window.sessionStorage.token))
                {
                    delete $window.sessionStorage.token;
                }

                $state.go('login');
            }
        };

        return service;
    }]);
