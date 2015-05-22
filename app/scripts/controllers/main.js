'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', ['$scope', '$position','AutenticacionService', '$state',
      function($scope,$position, AutenticacionService, $state) {

          //var aut = AutenticacionService;



              var created = window.localStorage.getItem('token').split(/Created=/)[1];
          console.log(created)
              var expireDate = new Date("2015-05-21T21:22:08.000000-04:00");

          var now = new Date();
console.log(expireDate,now);
          if (expireDate > now)
          {
                window.localStorage.setItem('token', '');
              $state.go('login');
          }

          console.log(created);
        //if (AutenticacionService.token == null)
        //{
        //  $state.go('login');
        //}
  }]);
