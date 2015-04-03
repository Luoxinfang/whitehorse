/**
 * Created by roy on 15-3-5.
 */
require(['jquery', 'angular', 'roy', 'app'], function (jquery, angular, roy, app) {
  "use strict";
  app.controller('regController', function ($scope) {
    this.user = {};

    //验证邮箱的合法性
    this.verifyEmail = function () {
      var email = $scope.email;
      var rs = roy.verify.isEmail(email);
      if(email){
        if(!rs){
          this.user.emailMsg = '邮箱格式不正确';
        }
      }else{
        this.user.emailMsg = '邮箱不能为空';
      }
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