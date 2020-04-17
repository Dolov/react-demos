import React from 'react'
import { store } from '../redux/index'
console.log('store: ', store);

console.log(typeof Symbol.observable)

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