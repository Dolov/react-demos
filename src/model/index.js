
import { createStore, combineReducers, applyMiddleware } from '../redux-src'
// import { createStore, combineReducers } from '../ssy-redux'
import count from './reducers/count'
import middleware from './middleware'


const reducer = combineReducers({
  count,
})

export const store = createStore(reducer,
  {
    count: 10
  },
  applyMiddleware(middleware),
)

 