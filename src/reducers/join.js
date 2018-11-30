import _ from 'lodash'

const initialState = {
  carpools: []
}

const join = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_CARPOOLS':
      state.carpools = []
      return _.merge({}, state, {
        carpools: action.carpools,
        address: action.address
      })
    case 'RECEIVE_FILTERS':
      return _.merge({}, state, {
        filters: action.filters,
        sort: action.sort
      })
    default:
      return state
  }
}

export default join