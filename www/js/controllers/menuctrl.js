angular.module('myJamApp')
  .controller('MenuCtrl', ['$scope', 'MenuService', function($scope, MenuService) {
    
    // grab the menu items array
    $scope.navigation = MenuService.navigation();

    // add the function to navigate the pages
    $scope.goTo = function(page) {
      console.log('going to ', page);
      $location.path('/' + page);
    };

  }]);