angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', ['$http', function($http) {
  // Might use a resource here that returns a JSON array

  return {
    getJoTD: function(callback) {
      $http.get('http://api.thisismyjam.com/1/jamoftheday.json').success(function(data) {
        callback(data);
      });
    }
  }  

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  // return {
  //   all: function() {
  //     return pets;
  //   },
  //   get: function(petId) {
  //     // Simple index lookup
  //     return pets[petId];
  //   }
  // }
}]);
