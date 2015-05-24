'use strict';

describe('Controller: OppsListCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanpocApp'));

  var OppsListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OppsListCtrl = $controller('OppsListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
