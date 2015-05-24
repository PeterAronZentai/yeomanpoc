'use strict';

angular.module('yeomanpocApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('opps', {
        url: '/opps',
        templateUrl: 'app/opps/opps.html',
        controller: 'OppsCtrl'
      });
  });