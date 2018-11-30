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

export function receivePending(pending) {
  return {
    type: 'RECEIVE_PENDING',
    pending
  }
}

export function getPending(user_id) {
  return async dispatch => {
    fetch(`http://localhost:8080/carpool/user/pending?idx=${user_id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(receivePending(json))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function acceptUserToCarpool(user_id, carpool_id) {
  return async dispatch => {
    fetch(`http://localhost:8080/carpooler`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id,
        carpool_id
      })
    })
    .then(res => {
      dispatch(getPending(user_id))
      dispatch(getMyCarpools(user_id))
    })
    .catch(err => {

    })
  }
}

export function rejectUserFromCarpool(user_id, carpool_id) {
  return async dispatch => {
    fetch(`http://localhost:8080/carpooler`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id,
        carpool_id
      })
    })
    .then(res => {
      dispatch(getPending(user_id))
    })
    .catch(err => {

    })
  }
}