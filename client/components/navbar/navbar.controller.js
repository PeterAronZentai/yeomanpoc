'use strict';

angular.module('yeomanpocApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'main',
      'link': '/'
    }, {
      title:'opps', link: '/opps'
    }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });