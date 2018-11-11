export function updateProfile(data) {
  console.log(data)
  return async dispatch => {
    fetch(``, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => {
      alert("Could not update profile")
    })
  }
}

export function updatePhoto(url) {
  return async dispatch => {
    fetch(``, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => {
      alert("Could not update photo")
    })
  }
}

