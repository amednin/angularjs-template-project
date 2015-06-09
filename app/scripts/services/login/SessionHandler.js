/**
 * Created by amed on 5/24/15.
 */

'use strict';


angular
    .module('sbAdminApp')
    .service('SessionHandler', SessionHandler);

    SessionHandler.$inject = ['$window', 'EXP_SESSION_TIME'];

/**
 *
 * @param $window Objeto que wrappea a window
 * @param EXP_SESSION_TIME Constante
 * @returns {{initSession: Function, validSession: Function, getToken: Function, clear: Function}}
 * @constructor Servicio para manejar la session
 */
    function SessionHandler($window, EXP_SESSION_TIME)
    {
        var service =
        {
            initSession: function (token) {
                $window.sessionStorage.token = token;
            },

            /**
             * Valida el token a partir de su fecha de creación + EXP_SESSION_TIME contra
             * la hora actual.
             * @returns {true si es válido, false en otro caso}
             */
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

            /**
             * Elimina el token que mantiene session en sessionStorage.
             */
            clear: function () {
                delete $window.sessionStorage.token;
            }
        };

        return service;
    }
