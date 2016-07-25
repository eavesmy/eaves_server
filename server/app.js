var url = require('url');
var path = require('path');
var viewPath = '/views/pages/';
var jade = require('jade');
var fs = require('fs');

var app = function (req, res) {
    var u = path.parse(req.url).name;
    viewPath += (u + '.jade');
    fs.exists(__dirname+viewPath, function (exists) {
        if (!exists) {
            res.writeHead(404, {'Content-Type': 'text/plain'});

            res.write("This request URL " + viewPath + " was not found on this server.");

            res.end();
        }else{

        }
    })
}

/*var pathname = url.parse(req.url).pathname;
 pathname = pathname.replace('/', '') + '.jade';*/

module.exports = app;