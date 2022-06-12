import React from "react";
import Error from "../Error";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return <Error />;
    }

    return children;
  }
}

export default ErrorBoundary;
