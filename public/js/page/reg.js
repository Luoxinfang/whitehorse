/**
 * Created by roy on 15-3-5.
 */
require(['jquery', 'angular', 'app'], function (jquery, angular, app) {
  "use strict";
  app.controller('regController', function ($scope) {

    var user = {email: '', nickName: '', password: ''};
    //验证邮箱的合法性
    this.verifyEmail = function (val) {
      alert(val);
    };
    $scope.processData = function () {
      alert(1);
      var rq = {
        method: 'POST',
        url: '/api/user',
        data: $.param(user)
      };
      $http(rq).success(function (data) {
        console.log(data);
      })
    };

  });
});