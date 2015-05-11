angular.module('mainApp')
.controller('ProductsController', ['$scope', 'ProductsService', function ($scope, ProductsService) {
	console.log($scope.products);
	alert('hola');
	$scope.products = ProductsService.query();

}]);