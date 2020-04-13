/**
 * 
 * createStore
 * combineReducers
 * dispatch
 * getState
 * subscribe
 * applyMiddleware
 */




const createStore = (reducer, middleware, defaultState) => {
  const subscribers = []
  let state
  if (defaultState) {
    state = defaultState
  }

  if (typeof middleware !== 'function') {
    state = middleware
  }

  const getState = () => {
    return state
  }
  const dispatch = action => {
    const newState = reducer(state, action)
    state = newState
    if (subscribers.length > 0) {
      subscribers.forEach(subscriber => {
        const context = subscriber()
      })
    }
  }
  const subscribe = subscriber => {
    if (typeof subscriber !== 'function') return
    subscribers.push(subscriber)
  }
  const store = {
    getState,
    dispatch,
    subscribe,
  }
  dispatch({
    type: 'REDUX_DEFAULT'
  })
  return store
}

const combineReducers = () => {

}

export {
  createStore,
  combineReducers,
}