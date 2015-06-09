'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position,$rootScope,$state, SessionHandler) {

        /**
         * Terminar la sesion.
         */
        function automaticLogout() {
            SessionHandler.clear();
            $state.go('login');
        }

        if (!SessionHandler.validSession()) // En caso de que siempre se quiera enviar a login para navegar por el sistema.
        {
            automaticLogout();
        }

        $rootScope.$on('authorized', function () {

        });

        /**
         * La acción que debe ejecutarse cuando se emita el evento 'unauthorized'
         */
        $rootScope.$on('unauthorized', function () {
            automaticLogout();
            return false;
        });
  });
