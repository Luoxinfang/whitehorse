/**
 * Created by roy on 15-4-3.
 */
var verify = {};
//判断是不是邮箱
verify.isEmail = function (email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
};
//判断是不是密码
verify.isPassword = function (pwd) {
  var re = /^[a-z0-9.]{6,9}$/i;
  return re.test(pwd);
};
//判断是不是昵称
verify.isNickName = function (nk) {
  var re = /[0-9|u4e00-u9fa5]{2,7}/i;
  return re.test(nk);
};
roy.verify = verify;