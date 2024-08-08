import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  errorMessage: string;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    errorMessage: '',
  };

  static getDerivedStateFromError(error: Error) {
    console.log('Error captured by ErrorBoundary:', error);
    return { errorMessage: error.toString() };
  }

  render() {
    if (this.state.errorMessage) {
      return <p>{this.state.errorMessage}. Please reload the page</p>;
    }
    return this.props.children;
  }
}
