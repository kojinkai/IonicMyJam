'use strict';

describe('Service: UserService', function () {
  
  // instantiate service
  var UserService,
    httpBackEnd;

  // load the service's module
  beforeEach(module('myJamApp'));

  beforeEach(inject(function ($httpBackend, _UserService_) {
    UserService = _UserService_;
    httpBackEnd = $httpBackend;
  }));

  describe('Service Initialisation', function() {
    // basic menu init test
    it('should do something', function () {
      expect(!!UserService).toBe(true);
    });
  });

  describe('API Response: Person Object', function() {
    // basic menu init test
    it('the person object should contain a jam avatar', function () {
      // expect(!!Menu).toBe(true);
    });
  });

});
