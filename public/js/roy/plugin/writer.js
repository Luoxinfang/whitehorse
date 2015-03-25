/**
 * Created by roy on 15-3-25.
 */
$.fn.writer = function (interval) {
  var interval = interval || 75;
  this.each(function () {
    var $el = $(this),
      str = $el.html(),
      progress = 0;
    $el.html('').show();
    var timer = setInterval(function () {
      var current = str.substr(progress, 1);
      if (current == '<') {
        progress = str.indexOf('>', progress) + 1;
      }else if(current == '&'){
        progress = str.indexOf(';', progress) + 1;
      } else {
        progress++;
      }
      $el.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
      if (progress >= str.length) {
        clearInterval(timer);
      }
    }, interval);
  });
  return this;
};