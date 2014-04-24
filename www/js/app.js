angular.module('myJamApp', [
  'ionic',
  'ngResource'
])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('home', {
      url: '/home',
      controller: 'homeCtrl',
      templateUrl: 'templates/home.html'
    })    
    .state('myjams', {
      url: '/myjams',
      controller: 'myJamsCtrl',
      templateUrl: 'templates/myjams.html'
    })
    .state('discover', {
      url: '/discover',
      controller: 'discoverCtrl',
      templateUrl: 'templates/discover.html'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});;