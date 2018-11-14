export function carpoolView(carpool) {
  return {
    type: 'CARPOOL_VIEW',
    carpool
  }
}

export function viewCarpool(carpool) {
  return async dispatch => {
    dispatch(carpoolView(carpool))
  }
}

export function receiveMyCarpools(carpools) {
  return {
    type: 'RECEIVE_MY_CARPOOLS',
    carpools
  }
}

export function getMyCarpools(user_id) {
  return async dispatch => {
    fetch(`http://localhost:8080/carpool/user?idx=${user_id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(receiveMyCarpools(json))
    })
    .catch(err => {
      console.log(err)
    })
  }
}