'use strict';

angular.module('myJamApp')
  .factory('UserService', ['$http', '$q', '$log', function ($http, $q, $log) {
    var url = 'http://api.thisismyjam.com/1/boxdeluxe.json';

    return {
      get: function() {
        // get requests
        // set up our promise paattern to store the results of the
        // $http request
        var deferred = $q.defer();

        $http.get(url, { cache: true }).success(function(data) {
            deferred.resolve(data);
          })

          .error(function(data, status, headers, config) {
            $log.info(data, status, headers, config);
            deferred.reject(data, status, headers, config);
        });

        return deferred.promise;
      }
    }
  }]);
