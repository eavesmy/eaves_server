import io from 'socket.io';

var eaves = module.exports = {};

eaves.netOn = function(){
    var socket = io.connect('http://localhost:8080');
}