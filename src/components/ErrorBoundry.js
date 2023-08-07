import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };

    }

    componentDidCatch() { //ヒットライフサイクル
        this.setState({ hasError: true });
    }

    render(){
        if (this.state.hasError) {
            return (<h1>exist error</h1>);
        }

        return this.props.children;
    }
}

export default ErrorBoundry;