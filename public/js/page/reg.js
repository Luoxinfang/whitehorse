/**
 * Created by roy on 15-3-5.
 */
require(['jquery','angular','app'], function (jquery,angular, app) {
  "use strict";
  app.controller('regController', function ($scope) {
    $scope.formData = {};

    $scope.processData = function () {
      var rq = {
        method: 'POST',
        url: '/api/user',
        data: $.param($scope.formData)
      };
      $http(rq).success(function(data){
        console.log(data);
      })
    };

  });
});