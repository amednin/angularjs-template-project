/**
 * Created by amed on 5/23/15.
 */
angular
    .module('sbAdminApp').controller('LoginController', ['$scope', '$window', '$state', 'AuthenticationService',
        function ($scope, $window, $state, AuthenticationService) {
            $scope.authServ = AuthenticationService;
            $scope.credentials = {
                username: '',
                password: ''
            };

            $scope.login = function () {
                $scope.authServ.authenticate.login({username: $scope.credentials.username, password: $scope.credentials.password},
                    function (data) {
                        if (angular.isUndefined(data.token))
                        {
                            $state.go('login');
                        }
                        else
                        {
                            $scope.authServ.initSession(data.token);
                        }
                    });
            }
    }]);
