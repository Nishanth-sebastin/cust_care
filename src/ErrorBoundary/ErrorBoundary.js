import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    componentDidCatch() {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return this.props.children;
        }
    }
}

export default ErrorBoundary