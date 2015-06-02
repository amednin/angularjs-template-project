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
                        if (angular.isUndefined(data.token))
                        {
                            $scope.isValid = false;
                            $state.go('login');
                        }
                        else
                        {
                            $scope.authServ.initSession(data.token);
                            // Verify if the token is a valid token!
                            $scope.authServ.verifyValidToken.check().$promise.then(function (data) {

                                if (!angular.isUndefined(data.success) && data.success === 'authenticated')
                                {
                                    $state.go('dashboard.home');
                                }
                                else
                                {
                                    $scope.authServ.endSession();
                                    $scope.isValid = false;
                                    $state.go('login');
                                }
                            },
                            function (error) {
                                $scope.isValid = false;
                                $state.go('login');
                            });
                        }
                    },
                    function (reason) { // Error
                        $scope.isValid = false;
                        $state.go('login');
                        return false;
                    }
                );
            }
    }]);
