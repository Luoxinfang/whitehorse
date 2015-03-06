/**
 * Created by roy on 15-3-6.
 */
var page = require('webpage').create();
page.open('http://localhost:3000/', function(s) {
  console.log(s);
  phantom.exit();
});


