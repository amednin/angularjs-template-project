'use strict';

angular.module('MainApp', [])

.service('EvenNumberService', [function() {
	this.verifyNumberIsEven = function (number) {
		return number % 2 == 0;
	};
}]);