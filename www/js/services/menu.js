'use strict';

angular.module('myJamApp')
  .factory('MenuService', ['$q', 'UserService', function ($q, UserService) {
    // Service logic
    // Here we pass in our UserService as we need the user details
    // to form part of our nav and this keeps the controller a bit cleaner.
    // We return the main nav array and a promise object containing the
    // the results of the resolved promise in the user object.
    // 2-tiered promise solution up in here.

    var navItems = [
      { title: 'Home', linkClass: 'icon ion-map', link: '/'},
      { title: 'My Jams', linkClass: 'icon ion-gear-b', link: 'myjams'},
      { title: 'Discover', linkClass: 'icon ion-star', link: 'discover'}
    ];

    // Public API here
    return {
      navigation: function () {
        return {
          mainNav: navItems,
          profile: function() {
            // Ok. Nested promises here, as stated above
            // returns a promise containing a resolved promise from UserService.
            var deferred = $q.defer();
        
            UserService.get().then(function(data) {
              deferred.resolve(data);
            }, function(data, status, headers, config) {
              console.log('error: ', data, status, headers, config);
            });
            return deferred.promise;
          }
        };
      }
    };
  }]);
