/**
 * Created by amed on 5/28/15.
 */

angular
    .module('sbAdminApp').controller('MenuController', ['$scope', '$state', 'MenuService', '$rootScope', 'SessionHandler',
        function ($scope, $state, MenuService, $rootScope, SessionHandler) {

            if (!SessionHandler.validSession())
            {
                $rootScope.$broadcast('unauthorized');
            }

            $scope.menu = {
                opcion: "Opcion 1",
                controlador: '/opcion-1'
            };

            $scope.crearMenu = function () {
                MenuService.menuPost.create({opcion: $scope.menu.opcion, controlador: $scope.menu.controlador})
                    .$promise.then(function (menuData) {
                        $state.go('dashboard.home');
                    }, function (error) {
                        console.log(error);
                    });
            };



        }]);