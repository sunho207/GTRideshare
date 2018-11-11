import _ from 'lodash'

const initialState = {
  carpool: {},
  carpools: []
}

const scheduled = (state = initialState, action) => {
  switch (action.type) {
    case 'CARPOOL_VIEW':
      state.carpool = {}
      return _.merge({}, state, {
        carpool: action.carpool
      })
    case 'RECEIVE_MY_CARPOOLS':
      state.carpools = []
      return _.merge({}, state, {
        carpools: action.carpools
      })
    default:
      return state
  }
}

export default scheduled