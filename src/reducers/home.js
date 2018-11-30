import _ from 'lodash'

const initialState = {
  carpool: {}
}

const home = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_MY_CARPOOLS':
      state.carpool = {}
      return _.merge({}, state, {
        carpool: action.carpools[0]
      })
    default:
      return state
  }
}

export default home