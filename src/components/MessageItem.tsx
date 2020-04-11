
import React from 'react'
import Button from './Button.tsx'

export default class MessageItem extends React.PureComponent {
  
  render() {
    const { children } = this.props
    return (
      <div>{children}<Button /></div>
    )
  }
}