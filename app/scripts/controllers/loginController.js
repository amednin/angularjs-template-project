/**
 * Created by amed on 5/21/15.
 */
angular
.module('sbAdminApp')
.controller('LoginController', ['$rootScope', '$scope', 'AutenticacionService', '$state',
    function ($rootScope, $scope, AutenticacionService, $state) {

        var auth = AutenticacionService;
    $scope.credenciales = {
        username: '',
        password: ''
    },
        $scope.tokenServ = null;

        $scope.login = function () {
            var tokenService = null;
            auth.getToken.get({username: $scope.credenciales.username, password: $scope.credenciales.password},
                function (token) {
                    console.log(token.token);
                auth.setToken(token.token);
                    window.localStorage.setItem('token', auth.token);

                    if (!angular.isUndefined(token))
                    {
                        $state.go('dashboard.home');
                    }
                    else
                    {
                        $state.go('login');
                    }
            });



        }
}]);