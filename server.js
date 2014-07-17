var connect = require('connect');

connect.createServer(
  connect.static("../ng-book")
).listen(5000);