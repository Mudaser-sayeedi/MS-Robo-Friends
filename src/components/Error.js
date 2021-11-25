import { Component } from 'react';

class ErrorCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info) {
        this.setState({
            hasError:true
        });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops there is some problem!</h1>
        } else {
            return this.props.children;
        }
    }

}


export default ErrorCatch;