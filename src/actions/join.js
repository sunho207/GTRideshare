export function receiveCarpools(carpools) {
  return {
    type: 'RECEIVE_CARPOOLS',
    carpools
  }
}

export function searchCarpools(lat, lng) {
  return async dispatch => {
    fetch(`http://localhost:8080/carpool?lat=${lat}&lng=${lng}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(receiveCarpools(json))
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function receiveFilters(sort, filters) {
  return {
    type: 'RECEIVE_FILTERS',
    sort,
    filters
  }
}

export function filterCarpools(sort, filters) {
  return async dispatch => {
    dispatch(receiveFilters(sort, filters))
  }
}

export function createCarpool(user_id, lat, lng, arrival, departure, days) {
  const test = JSON.stringify({
    user_id,
    lat,
    lng,
    arrival,
    departure,
    days
  })
  return async dispatch => {
    fetch(`http://localhost:8080/carpool`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id,
        lat,
        lng,
        arrival,
        departure,
        days
      })
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
    .catch(err => {

    })
  }
}