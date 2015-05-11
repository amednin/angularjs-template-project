'use strict';

/* App Module */

var mainApp = angular.module('mainApp', ['ui.router'])
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("home",
			{
				url: "/",
				templateUrl: "app/views/home/index.html",
				controller: 'HomeController'
			}
		)
}])
;
