'use strict';

angular.module('myJamApp')
  .controller('MyJamsCtrl', ['$scope', 'UserService', function($scope, UserService) {
    console.log('My Jams controller');
    $scope.Homeusers = UserService;
  }]);