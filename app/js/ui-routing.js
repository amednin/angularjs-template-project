mainApp.config(['$stateProvider', function ($stateProvider) {
	$stateProvider
		.state("home",
			{
				url: "",
				templateUrl: "app/js/views/home/index.html",
				controller: "HomeController"
			}
		)
}]);