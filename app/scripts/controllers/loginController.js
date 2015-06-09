/**
 * Created by amed on 5/23/15.
 */
angular
    .module('sbAdminApp').controller('LoginController', ['$scope', '$window', '$state', 'AuthenticationService',
        function ($scope, $window, $state, AuthenticationService) {
            $scope.authServ = AuthenticationService;

            /**
             * Modelo para manejar los valores ingresados por el usuario
             * para poder loggearse.
             * @type {{username: string, password: string}}
             */
            $scope.credentials = {
                username: '',
                password: ''
            };

            /**
             * Bandera que maneja la correctitud de las credenciales.
             * @type {boolean}
             */
            $scope.isValid = true;

            /**
             * Define una función accesible desde el template para poder
             * lanzar el evento que tiene el servicio de autenticación.
             */
            $scope.login = function () {
                $scope.authServ.authenticate.login({username: $scope.credentials.username,
                        password: $scope.credentials.password}
                )
                    /**
                     * Capturamos la promesa tras el request por ajax que hace
                     * el servicio de autenticación. Promesa que nos permite
                     * acceder a los datos en caso de tarea finalizada con éxito
                     * o acceder a un mensaje de error en caso de que la tarea
                     * no haya finalizado con éxito.
                     */
                    .$promise.then(
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
