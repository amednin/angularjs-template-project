angular.module('mainApp')
	.controller('HomeController', ['$scope', function ($scope) {
		$scope.greetings = "Hello World!";
	}]);