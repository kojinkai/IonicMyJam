angular.module('myJamApp')
  .controller('MenuCtrl', ['$scope', '$location', '$ionicSideMenuDelegate', 'MenuService', 'UserService', function($scope, $location, $ionicSideMenuDelegate, MenuService, UserService) {

    // grab the menu items array
    $scope.navigation = MenuService.navigation();

    // resolve the promise that comes back from the navigation.profile object
    $scope.navigation.profile().then(function(data) {
      $scope.profileInfo = data;
    });

    // toggle the side menu when a menu link is clicked
    $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

    // add the function to navigate the pages
    $scope.goTo = function(page) {
      console.log('going to ', page);
      this.toggleLeft();
      $location.path('/' + page);
    };

  }]);