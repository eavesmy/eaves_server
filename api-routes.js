var nano = require('nano')('http://localhost:5984');
var CodeOrder = nano.use('codeorder');

exports.insert = function(code,query){

};

exports.run = function(code,query,callback){
    CodeOrder.get(code,function(err,body){
        var info;
        if(err){
           return console.log(err)
        }
        info = {run:body[query]};
        callback&&callback(info);
    });
};