'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position,$rootScope,$state) {
        console.log('main!!');
        $rootScope.$on('authorized', function () {

        });

        $rootScope.$on('unauthorized', function () {
//            AuthenticationService.clear();
            $state.go('login');
        });
  });
