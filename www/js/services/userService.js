'use strict';

angular.module('myJamApp')
  .factory('UserService', ['$http', function ($http) {
    // Service logic
    var url = 'http://api.thisismyjam.com/1/boxdeluxe.json',
      response;

    $http.get(url, { cache: true }).success(function(data) {
      response = data;
      console.log(response);
    });

    // Public API here
    return {
      userData: function () {
        return response;
      }
    };
  }]);
