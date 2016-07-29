var url = require('url');
var path = require('path');
var jade = require('jade');
var fs = require('fs'); 

var D =  require('./dictionary');

var app = function(req, res) {
    var u = path.parse(req.url).name;
    console.log('Debug : get a url ->',u);
    //viewPath += u;
    /*fs.exists(__dirname + viewPath, function(exists) {
        !exists ? router.notFound() : router.render();
    });*/
}
/*router.notFound = function() {
    
    res.writeHead(404, {
        'Content-Type': 'text/plain'
    });

    res.write("This request URL " + viewPath + " was not found on this server.");

    res.end();
}
*/
module.exports = app;