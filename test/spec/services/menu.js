'use strict';

describe('Service: MenuService', function () {

  // instantiate service
  var Menu,
    navArray;
  
  // load the service's module
  beforeEach(module('myJamApp'));

  beforeEach(inject(function (_MenuService_) {
    Menu = _MenuService_;
    navArray = Menu.navigation();
  }));

  describe('Service Initialisation', function() {
    // basic menu init test
    it('should do something', function () {
      expect(!!Menu).toBe(true);
    });
  });

  describe('Returning the main navigation', function() {
    // testing the contents of the array
    it('should define a link destination', function () {
      for (var i = 0; i < navArray.length; i++) {
        expect(navArray[i].link).toBeDefined();
      }
    });
    
    it('should define a link title', function () {
      for (var i = 0; i < navArray.length; i++) {
        expect(navArray[i].title).toBeDefined();
      }
    });

    it('should define a link class', function () {
      for (var i = 0; i < navArray.length; i++) {
        expect(navArray[i].linkClass).toBeDefined();
      }
    });
  });
});
