var React = require('react');
var Marked = require('marked');
var Tool = require('../tool');

var UserPublish = React.createClass({
    autoSave:function(_text,lastTime,newTime){
        newTime = new Date();
        //( = 300)?(console.log('aaa')):(console.log('miss'));
        this.refs.showInfo.innerHTML += ',于'+Tool.time().Date+ '保存';
    },
	markDown:function(a,b,c,t){
        t = new Date();
        a = this.refs.markedText.value;
        b = Marked(a);
        c = '已编辑'+a.length+ '字';
        this.refs.showText.innerHTML = b;
        this.refs.showInfo.innerHTML = c;
	},
	render:function(){
		return (<div>
            <input type="text" className="input input-coffee input-full" placeholder="请在这里输入标题"/>
            <div className="body">
                <div className="left">
                    <textarea className="input input-coffee input-full" ref="markedText" placeholder="Markdown 编辑器" onKeyDown={this.markDown}/>
                </div>
                <div className="right" ref="showText"></div>
            </div>
            <div className="bottom">
                <button className="btn btn-coffee">Publish</button>
                <span ref="showInfo"></span>
            </div>
        </div>);
	}
});

module.exports = UserPublish;
