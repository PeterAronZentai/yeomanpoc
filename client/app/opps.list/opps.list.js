'use strict';

angular.module('yeomanpocApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('opps.list', {
        url: '/list',
        templateUrl: 'app/opps.list/opps.list.html',
        controller: 'OppsListCtrl'
      });
  });