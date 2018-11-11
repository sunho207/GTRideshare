import _ from 'lodash'

const initialState = {
  carpool: {}
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_UPCOMING_CARPOOL':
      return _.merge({}, state, {
        carpool: action.carpool
      })
    default:
      return state
  }
}

export default home