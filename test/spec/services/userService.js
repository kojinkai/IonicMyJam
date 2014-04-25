'use strict';

describe('Service: UserService', function () {
  
  // instantiate service
  var httpBackEnd,
    UserService;

  // load the service's module
  beforeEach(module('myJamApp'));

  describe('Service Initialisation', function() {
    
    beforeEach(inject(function (_UserService_) {
      UserService = _UserService_;
    }));    
    // basic menu init test
    it('should do something', function () {
      expect(!!UserService).toBe(true);
    });
  });

  describe('API Response: Person Object', function() {
    beforeEach(inject(function ($httpBackend, _UserService_) {
      httpBackEnd = $httpBackend;
      UserService = _UserService_;

      httpBackEnd.expectGET('http://api.thisismyjam.com/1/boxdeluxe.json').respond({
        "person": {
            "apiUrl": "http://www.thisismyjam.com/1/boxdeluxe.json"
        }
      });

    }));    
    it('the person object should contain a jam avatar', function () {
      // expect the returned object to be undefined until we flush the backend
      expect(UserService.userData()).toBeUndefined();
      httpBackEnd.flush();
      expect(UserService.userData()).toBeDefined();
    });
  });

});
