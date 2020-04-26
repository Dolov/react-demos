import React from 'react'
import errorBoundaryDecorator from './ErrorBoundary'


class ErrorTest extends React.Component {

  state = {
    count: 0,
  }

  componentDidMount() {
    // 声明周期内的报错可以捕获
    // console.log(this.state.userInfo.name)

    // 异步无法捕获
    // setTimeout(() => {
    //   console.log(this.state.userInfo.name)
    // }, 1000)
  }

  renderError = () => {
    // render 报错可以捕获
    this.setState({
      count: {}
    })
  }

  handleEvent = () => {
    // 事件处理无法捕获
    console.log(this.state.userInfo.name)
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <button onClick={this.renderError}>异常渲染 {count}</button>
        <button onClick={this.handleEvent}>事件处理</button>
      </div>
    )
  }
}

export default errorBoundaryDecorator()(ErrorTest)