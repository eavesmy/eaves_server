var tools = require('../tools');
var Code = require('./terminal-code');

exports.render = function(req,res){
    res.render('eaves-terminal',{
        _privite:tools._info
    });
};

exports.code = function(req,res){
    var CodeErr = function(info){
        var err = {
            info:info,
            status:500
        };
        return res.send(err);
    }, FindOrder = function(code,query,callback){
        (!Code[code])?(CodeErr('还没有这个命令哦～')):(callback(code,query));
    }, FindQuery = function(code,query){
        var i;
        for(i = 0;i<query.length;i++){
            if(!Code[code].query[query[i]] || Code[code].query[query[i]]===undefined){
                return CodeErr('没有这个参数哦～')
            }
        }
        RunCode(code,query);
    },RunCode = function(code,query){
        res.send('命令：'+code+'有参数'+query+'可以执行');
        //写到这里了，该写数据库了。
    };
    FindOrder(req.body._code,req.body._query.split(','),FindQuery);
};