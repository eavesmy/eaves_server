import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {

    }

    componentDidMount() {
/*        this.refs.userInput.onkeyup = function (e) {
            var _that = this;
            var _t = this.value.split(' ');
            if (eaves.checkKeyCode(e.keyCode))eaves.ajaxSend('/terminal', _t, function (data) {
                _that.value = '';
                var status = data._status;
                var text = data._info;
            });
        }*/
    }

    render() {
        return <div className="input">
            <span className="input-title">{this.props.name}</span>
            <input type="text" ref="userInput" id="user-input"/>
        </div>
    }
}

export default Input;