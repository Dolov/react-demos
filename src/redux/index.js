
// import { createStore, combineReducers } from 'redux'
import { createStore, combineReducers } from '../ssy-redux'
import count from './reducers/count'


// const reducer = combineReducers({
//   count,
// })

export const store = createStore(count)

 