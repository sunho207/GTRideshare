export function receiveUpcomingCarpool(carpool) {
  return {
    type: 'RECEIVE_UPCOMING_CARPOOL',
    carpool
  }
}

export function getUpcomingCarpool() {
  return async dispatch => {
    fetch(``, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(receiveUpcomingCarpool(json))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
