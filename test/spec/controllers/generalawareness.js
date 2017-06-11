'use strict';

describe('Controller: GeneralawarenessCtrl', function () {

  // load the controller's module
  beforeEach(module('myProjectApp'));

  var GeneralawarenessCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneralawarenessCtrl = $controller('GeneralawarenessCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeneralawarenessCtrl.awesomeThings.length).toBe(3);
  });
});
