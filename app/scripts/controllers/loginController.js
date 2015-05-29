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
            $scope.isValid = true;

            $scope.login = function () {
                $scope.authServ.authenticate.login({username: $scope.credentials.username,
                        password: $scope.credentials.password}
                ).$promise.then(
                    function (data) {  // Success
                        console.log(data);
                        if (angular.isUndefined(data.token))
                        {
                            $scope.isValid = false;
                            $state.go('login');
                        }
                        else
                        {
                            $scope.authServ.initSession(data.token);
                            $state.go('dashboard.home');
                        }
                    },
                    function (reason) { // Error
                        console.log(reason);
                        $scope.isValid = false;
                        $state.go('login');
                        return false;
                    }
                );
            }
    }]);
