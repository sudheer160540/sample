'use strict';

describe('Controller: EnglishwithexpertCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var EnglishwithexpertCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EnglishwithexpertCtrl = $controller('EnglishwithexpertCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EnglishwithexpertCtrl.awesomeThings.length).toBe(3);
  });
});
