'use strict';

angular.module('myJamApp')
  .factory('MenuService', function () {
    // Service logic

    var navItems = [
      { title: 'Home', linkClass: 'icon ion-map', link: '/'},
      { title: 'My Jams', linkClass: 'icon ion-gear-b', link: 'jams'},
      { title: 'Discover', linkClass: 'icon ion-star', link: 'discover'}
     ];

    // Public API here
    return {
      navigation: function () {
        return navItems;
      }
    };
  });
