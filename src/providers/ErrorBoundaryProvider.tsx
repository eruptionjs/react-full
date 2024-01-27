import { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundaryProvider extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errInfo = errorInfo.componentStack?.toString() || ''
    throw new Error(`An error ocurred. ERROR:00 #%d ${errInfo}`, error)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Error Boundary: Internal Error.</h1>
          <h2>Something went wrong with the application. Try again later.</h2>
        </>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundaryProvider }
