import React from 'react';
import './App.css';

import ErrorTest from './components/ErrorTest'
import ErrorBoundary from './components/ErrorBoundary'

export default () => (
  <ErrorBoundary>
    <ErrorTest />
  </ErrorBoundary>
)

