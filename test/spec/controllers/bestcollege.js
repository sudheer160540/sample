'use strict';

describe('Controller: BestcollegeCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var BestcollegeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BestcollegeCtrl = $controller('BestcollegeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BestcollegeCtrl.awesomeThings.length).toBe(3);
  });
});
