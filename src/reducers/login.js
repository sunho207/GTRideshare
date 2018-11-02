import _ from 'lodash'

const initialState = {
  user: null,
  error: null
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return _.merge({}, state, {
        user: action.user,
        error: null
      })

    case 'LOGGED_OUT':
      return _.merge({}, state, {
        user: null,
        error: null
      })

    case 'FAILED_LOGIN':
      return _.merge({}. state, {
        user: null,
        error: action.err
      })
    
    default:
      return state
  }
}

export default login