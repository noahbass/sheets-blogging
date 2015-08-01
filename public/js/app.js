'use strict';

angular.module('app', [
  'ngRoute',
  'times.tabletop',
  'app.controllers',
  'app.filters',
  'app.services',
  'app.directives'
]).
config(function ($routeProvider, $locationProvider, TabletopProvider) {
  TabletopProvider.setTabletopOptions({
    key: 'https://docs.google.com/spreadsheets/d/1EEX2f9CB2wx4WTqKGDsumNJAnC1aRLzYUABTeXDfa5w/pubhtml',
  });
  
  $routeProvider
    .when('/', {
      templateUrl: 'partials/blog',
      controller: 'blogController'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
});
