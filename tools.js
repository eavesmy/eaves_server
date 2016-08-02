exports.time = function() {
    var D = new Date(),
        y = D.getFullYear(),
        m = D.getMonth(),
        d = D.getDay(),
        h = D.hours(),
        min = D.getMinutes(),
        s = D.getSeconds();
    return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s
}