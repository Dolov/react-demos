export default (state = {
  count: 11
}, action) => {
  const { type } = action
  if (type === 'add') {
    return {
      ...state,
      count: state.count + 1
    }
  }
  if (type === 'decrease') {
    return {
      ...state,
      count: state.count - 1
    }
  }
  return state
}