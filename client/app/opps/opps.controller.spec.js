'use strict';

describe('Controller: OppsCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanpocApp'));

  var OppsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OppsCtrl = $controller('OppsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
