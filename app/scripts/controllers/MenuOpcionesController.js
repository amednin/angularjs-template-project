/**
 * Created by amed on 5/18/15.
 */
'use strict';

angular
    .module('sbAdminApp')
    .controller('ProductsRestController', ['$scope', 'ProductsService', '$state', function ($scope, ProductsService, $state) {
        $scope.menuOpciones = ProductsService.menu_options.query();
    }]);