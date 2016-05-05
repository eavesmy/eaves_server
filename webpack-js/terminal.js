import React from 'react';
import ReactDom from 'react-dom';
import ajax from 'reqwest';

let _info = {
    name:'editor',
    age:25
};

class Terminal extends React.Component{
    componentDidMount(){
        window.addEventListener('keypress',function(e){
            (e.keyCode === 13)?(CodeInterface()):(false)
        });

        var CodeInterface = (a)=>{
            a = document.getElementById('user-input').value;
            CodeDeal(a);
        };

        var CodeDeal = (_code)=>{
            var code,query;
            _code = _code.split(' ');
            code = _code.splice(0,1).toString();
            query = _code.toString();
            console.log(code,query);
            ajax({
                url:'/terminal',
                method:'POST',
                data:{
                    _code:code,
                    _query:query
                },
                success:function(res){
                    console.log(res);
                }
            });
        };

        var CodeShow = (domShow)  =>{
            domShow = document.getElementById('user-show');
            console.log('codeshow')
        }
    }
    render(){
        return <div>
            <div className="title">
                EAVES
            </div>
            <div className="body" id="user-show">
                {this.props.name},use <span className="text-reminder">help</span> to show how to use this.
            </div>
            <div className="input">
                <span className="input-title">
                    <span className="text-unactivated">visitor</span>
                    <span className="text-logo">@EAVES</span>
                    $
                </span>
                <input id="user-input" type="text" placeholder="Tap here"/>
            </div>
        </div>
    }
}

ReactDom.render(<Terminal name="editor" />,document.getElementById('terminal'));
