import React, { Component } from 'react'
import Layout from './components/Layout'
import ErrorBoundary from './components/ErrorBoundary'

class App extends Component {
  render () {
    return (
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    )
  }
}

export default App
