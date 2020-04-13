
import { createStore, combineReducers } from 'redux'
import count from './reducers/count'


const reducer = combineReducers({
  count,
})

export const store = createStore(reducer, {
  count: 10,
})

 