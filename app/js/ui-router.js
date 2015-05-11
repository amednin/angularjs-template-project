mainApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider

		// HOME
		.state("home",
			{
				url: "/",
				templateUrl: "app/views/home/index.html",
				controller: 'HomeController'
			}
		)

		// Products
		.state("products",
			{
				url: "/products",
				templateUrl: "app/views/products/index.html",
				controller: 'ProductsController'
			}
		)
}]);