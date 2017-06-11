'use strict';

describe('Controller: AchieveradviceCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var AchieveradviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AchieveradviceCtrl = $controller('AchieveradviceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AchieveradviceCtrl.awesomeThings.length).toBe(3);
  });
});
