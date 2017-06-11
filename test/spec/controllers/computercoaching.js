'use strict';

describe('Controller: ComputercoachingCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var ComputercoachingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComputercoachingCtrl = $controller('ComputercoachingCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComputercoachingCtrl.awesomeThings.length).toBe(3);
  });
});
