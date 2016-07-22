var server = require('http').createServer();
var io = require('socket.io')(server);

var packMgr = require('./packMgr');
var player = require('./player');

io.on('connect',function(socket){
    player.new(socket);
    socket.on('event',packMgr.dw(data));
    socket.on('disconnect',packMgr.close);
});

module.exports = server;