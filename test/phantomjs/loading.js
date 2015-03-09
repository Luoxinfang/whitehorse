/**
 * Created by roy on 15-3-7.
 */

var page = require('webpage').create();
page.open('http://localhost:3000/reg',function(){
  page.render('./test/result/page-index.png');
  phantom.exit();
});