import React from 'react';
import ReactDom from 'react-dom';

class Terminal extends React.Component{
    constructor(){
        this.state={
            count:1
        }
    }

    testClick(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return <div>
            <div className="title" onClick={this.testClick.bind(this)}>
                EAVES{this.state.count}
            </div>
        </div>
    }
}

ReactDom.render(<Terminal />,document.getElementById('terminal'));