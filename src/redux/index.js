
import { createStore, combineReducers } from 'redux'


export const store = createStore((state = {
  count: 0,
}, {
  type,
}) => {
  if (type === 'add') {
    const newState = Object.assign({}, state, {count: state.count + 1})
    return newState
  }
  if (type === 'decrease') {
    const newState = Object.assign({}, state, {count: state.count - 1})
    return newState
  }
  return state
}, {
  count: 10,
})

 