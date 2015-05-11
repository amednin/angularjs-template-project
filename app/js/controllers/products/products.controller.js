mainApp
.controller('ProductsController', ['$scope', 'ProductsService', function ($scope, ProductsService) {

	$scope.products = ProductsService.query();
	
}]);