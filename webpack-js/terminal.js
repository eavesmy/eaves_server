import React from 'react';
import ReactDom from 'react-dom';
import ajax from 'reqwest';

let _info = {
    name:'editor',
    age:25
};



class Terminal extends React.Component{
    render(){
        return <div>
            aaa
        </div>
    }
}

ReactDom.render(<Terminal name="editor" />,document.getElementById('terminal'));