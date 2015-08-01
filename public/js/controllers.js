'use strict';

angular.module('app.controllers', [])
  .controller('blogController', function ($scope, Tabletop) {
    $scope.hello = 'hello there';

    Tabletop.then(function(data) {
      $scope.posts = data[0].blog.elements;
    });
  })
;
