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

        var CodeInterface = ()=>{
            var domShow = this.refs.userShow,
                a = this.refs.userInput,
                div = document.createElement('div');
            div.setAttribute('class','text-reminder');
            div.innerText = '>'+a.value;
            domShow.appendChild(div);
            CodeDeal(a.value);
            a.value = '';
        };

        var CodeDeal = (_code)=>{
            var code,query;
            _code = _code.split(' ');
            code = _code.splice(0,1).toString();
            query = _code.toString();
            ajax({
                url:'/terminal',
                method:'POST',
                data:{
                    _code:code,
                    _query:query
                },
                success:function(res){
                    CodeShow(res);
                }
            });
        };

        var CodeShow = (main)  =>{
            var domShow = this.refs.userShow,
                row = document.createElement('div');
            row.setAttribute('class','row');
            (main._status === 404)?(row.innerHTML = '<span class="text-waring">'+main._status+'</span>'+main._info):(row.innerHTML = '<span>'+main._info+'</span>')
            domShow.appendChild(row);
        }
    }
    render(){
        return <div>
            <div className="title">
                EAVES
            </div>
            <div ref="userShow" className="body">
                {this.props.name},use <span className="text-reminder">help</span> to show how to use this.
            </div>
            <div className="input">
                <span className="input-title">
                    <span className="text-unactivated">visitor</span>
                    <span className="text-logo">@EAVES</span>
                    $
                </span>
                <input ref="userInput" id="user-input" type="text" placeholder="Tap here"/>
            </div>
        </div>
    }
}

ReactDom.render(<Terminal name="editor" />,document.getElementById('terminal'));
