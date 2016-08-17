import React from 'react';

class HomeBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	autoTop:0
        }
    }

    handleResize(e) {
    	console.log(e,this)
    }

    componentDidMount() {
        window.addEventListener('resize',this.handleResize);
    }

    render() {
        return <div ref = 'block'
        className = "block" > < /div>}
}

export default HomeBlock;