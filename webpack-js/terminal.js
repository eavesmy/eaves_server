import React from 'react';
import ReactDom from 'react-dom';
import ajax from 'reqwest';

let _info = {
    name:'editor',
    age:25
};

class Contain extends React.Component{
    render(){
        return <div className="contain">
            This is contain
        </div>
    }
}

class Input extends React.Component{
    render(){
        return <div className="input">
            <span className="input-title">{this.props.name}</span>
            <input type="text" id="user-input"/>
        </div>
    }
}

ReactDom.render(<div>
    <Contain />
    <Input />
</div>, document.getElementById('terminal'));