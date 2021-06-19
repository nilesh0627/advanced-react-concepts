import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error.message);
    this.setState({ error: error, errorInfo: errorInfo });
  }
  render() {
    if (this.state.error?.message) {
      return <h2>Something Went Wrong</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
