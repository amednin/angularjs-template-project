/**
 * Created by amed on 5/18/15.
 */
'use strict';

angular
    .module('sbAdminApp')
    .controller('ProductsRestController', ['$scope', 'ProductsService', '$state', function ($scope, ProductsService, $state) {

        /**
         * Maneja todos los datos devueltos por la API,
         * gracias al data-binding podemos prescindir de la promesa en
         * este caso.
         * @type {*|{method, isArray}}
         */
        $scope.menuOpciones = ProductsService.menu_options.query();
    }]);