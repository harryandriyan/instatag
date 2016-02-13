'use strict';

/* App Module */

var InstaTagApp = angular.module('InstaTagApp', [
  'ngRoute',
  'InstaTagAppCtrl',
]);

InstaTagApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'tmp/home.html',
        controller: 'HomeCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);