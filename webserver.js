var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8081, function () {
    console.log('Web server running on 8081...');
});