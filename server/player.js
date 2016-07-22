var player = module.exports = {};

var players = [];

player.P = function(){}
var P = player.P;
P.prototype.send = function(data){
    this.socket.send(data);
}

player.getID = function(){
    var i = 0,l = players.length+1;
    for(i;i<l&&players[i] === undefined;i++);
    return i;
}

player.new = function(socket){
    var p = new P();
    p.socket = socket;
    p._id = player.getID;

    console.log('Debug : player ->',p);
    players[p._id] = p;
}

