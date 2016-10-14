var Eaves = {
    _on:Document.prototype.addEventListener,
    animation:function(action,callback){
        Velocity(this, action);
        callback && callback(dom);
    }
}


var $ = module.exports = function(str) {
    var t = str.substr(0, 1),
        name = str.substr(1, str.length);
    var dom =  t === '#' ? document.getElementById(name) : document.getElementsByClassName(name);

    Object.keys(Eaves).forEach(function(opt){
        Object.prototype[opt] = Eaves[opt];
    });

    return dom;
};