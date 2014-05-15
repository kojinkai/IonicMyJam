angular.module('myJamApp')
  .controller('DiscoverCtrl', ['$scope', 'UserService', function($scope, UserService) {
    console.log('discover controller');
    $scope.Homeusers = UserService;
  }]);