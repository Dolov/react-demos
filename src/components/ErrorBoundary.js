import React from 'react'

export default class ErrorBoundary extends React.Component {
  
  state = {
    error: false,
  }

  static getDerivedStateFromError(error) {
    console.log('error: ', error);
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { error: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    const { error } = this.state
    if (error) return 'sorry, something went error'
    return this.props.children
  }
}