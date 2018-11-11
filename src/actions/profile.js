export function loggedIn(user) {
  return {
    type: 'LOGGED_IN',
    user
  }
}

export function updateProfile(idx, first_name, last_name, phone_number, profile_picture) {
  return async dispatch => {
    fetch(`http://localhost:8080/user`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idx,
        first_name,
        last_name,
        phone_number,
        profile_picture
      })
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
      alert("Could not update profile")
    })
  }
}
