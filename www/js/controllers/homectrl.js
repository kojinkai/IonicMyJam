angular.module('myJamApp')
  .controller('HomeCtrl', ['$scope', 'UserService', function($scope, UserService) {
    console.log('Home controller');
    $scope.Homeusers = UserService;
  }]);