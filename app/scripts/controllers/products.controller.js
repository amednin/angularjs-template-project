angular
.module('sbAdminApp')
.controller('ProductsController', ['$scope', 'ProductsService', function ($scope, ProductsService) {

	$scope.products = ProductsService.query();

}]);