export default (state, action) => {
  const { type } = action
  if (type === 'add') {
    return state + 1
  }
  if (type === 'decrease') {
    return state - 1
  }
  return state
}