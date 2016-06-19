import React from 'react';
import eaves from './eaves';

class Input extends React.Component{
    componentWillMount(){

    }
    render(){
        return <div className="input">
            <span className="input-title">{this.props.name}</span>
            <input type="text" id="user-input"/>
        </div>
    }
}

export default Input;