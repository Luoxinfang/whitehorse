/**
 * Created by roy on 15-3-5.
 */
"use strict";
var app = angular.module('somgle',[]);
app.controller('regController', function ($scope) {
  this.user = {};
  //验证邮箱的合法性
  this.verifyEmail = function () {
    var email = $scope.email;
    var rs = roy.verify.isEmail(email);
    if (email) {
      if (!rs) {
        this.user.emailMsg = '邮箱格式不正确';
      }else{
        this.user.emailMsg = null;
      }
    } else {
      this.user.emailMsg = '邮箱不能为空';
    }
  };
  //验证密码的合法性
  this.verifyPwd = function () {
    var pwd = $scope.password;
    var rs = roy.verify.isPassword(pwd);
    if (pwd) {
      if (!rs) {
        this.user.pwdMsg = '密码格式不正确';
      }else{
        this.user.pwdMsg = null;
      }
    } else {
      this.user.pwdMsg = '密码不能为空';
    }
  };
  //验证昵称的合法性
  this.verifyNickName = function () {
    var nickName = $scope.nickName;
    var rs = roy.verify.isNickName(nickName);
    if(nickName){
      if(rs){
        this.user.nickNameMsg = null;
      }else{
        this.user.nickNameMsg = '昵称格式不对';
      }
    }else{
      this.user.nickNameMsg = '昵称不能为空';
    }
  };
  this.processData = function () {
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
