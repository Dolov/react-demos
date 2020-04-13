import React from 'react'
import { store } from '../redux/index'


export default class Count extends React.PureComponent {

  decrease = () => {
    store.dispatch({
      type: 'decrease',
    })
  }

  add = () => {
    store.dispatch({
      type: 'add',
    })
  }

  render() {
    const count = this.props.store?.count
    return (
      <div>
        <button onClick={this.decrease}>-</button>
        {count}
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}