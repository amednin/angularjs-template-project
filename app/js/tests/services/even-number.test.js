'use strict';

describe('Example Service Test', function() {
	var EvenNumberService;

	beforeEach(module('MainApp'));

  	beforeEach(inject(function($injector) {
    	EvenNumberService = $injector.get('EvenNumberService');
  	}));

  	it('Should output even numbers verification', function() {
	    expect(EvenNumberService.verifyNumberIsEven(2)).toBe(true);
	    expect(EvenNumberService.verifyNumberIsEven(3)).toBe(false);
	 });
});