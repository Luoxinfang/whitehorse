/**
 * Created by roy on 15-4-3.
 */
var verify = {};
//判断是不是邮箱
verify.isEmail = function (email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
};

roy.verify = verify;