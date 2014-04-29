angular.module('myJamApp')
  .controller('MenuCtrl', ['$scope', '$location','MenuService', 'UserService', function($scope, $location, MenuService, UserService) {

    // grab the menu items array
    $scope.navigation = MenuService.navigation();

    // resolve the promise that comes back from the navigation.profile object
    $scope.navigation.profile().then(function(data) {
      $scope.profileInfo = data;
    });

    // add the function to navigate the pages
    $scope.goTo = function(page) {
      console.log('going to ', page);
      $location.path('/' + page);
    };

  }]);