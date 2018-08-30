const initial = {
  
}

const actionsMap = {
  
}

export default (state = initial, action) => {
  const reduceFn = actionsMap[action.type]
  if (reduceFn !== undefined) {
    return reduceFn(state, action)
  }
  return state
}
