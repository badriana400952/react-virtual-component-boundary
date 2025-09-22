import React, { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode; // optional fallback UI
}

interface State {
  hasError: boolean;
}

class MyComponent extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // bisa log error ke service monitoring (Sentry, LogRocket, dll)
    console.error("Error caught by MyComponent:", error, errorInfo);
  }




    render(): React.ReactNode {
        if (this.state.hasError) {
            return  this.props.fallback || (
                <div className="p-6 text-center">
                    <h2 className="text-xl font-bold text-red-500">
                        Oops! Something went wrong.
                    </h2>
                    <button
                        onClick={() => this.setState({ hasError: false })}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Try Again
                    </button>
                </div>
            );
        }

        return this.props.children ?? null;
    }

}


export default MyComponent;
