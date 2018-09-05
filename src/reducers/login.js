import _ from 'lodash'

const initialState = {
  user: null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return _.merge({}, state, {
        user: action.user
      })

    case 'LOGGED_OUT':
      return _.merge({}, state, {
        user: null
      })
    
    default:
      return state
  }
}

export default login