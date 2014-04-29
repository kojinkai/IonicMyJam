'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('myJamApp'));

  var scope, MenuCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    
    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
    });
  }));

  it('should assign the navigation array to the scope', function() {
    expect(scope.navigation).toBeDefined();
  });

  it('should assign a goTo menu function to the scope', function() {
    expect(typeof scope.goTo).toEqual('function');
  });
});
