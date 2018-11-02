export function loggedIn(user) {
  return {
    type: 'LOGGED_IN',
    user
  }
}

export function failedLogin(err) {
  return {
    type: 'FAILED_LOGIN',
    err
  }
}

export function login(email, password) {
  return async dispatch => {
    fetch(`http://localhost:8080/user?email=${email}&password=${password}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(loggedIn(json))
    })
    .catch(err => {
      dispatch(failedLogin(err))
    })
  }
}

export function setUser(user) {
  return async dispatch => {
    dispatch(loggedIn(user))
  }
}

export const loggedOut = () => ({
  type: 'LOGGED_OUT'
})

export function logout() {
  return async dispatch => {
    dispatch(loggedOut())
  }
}

export function registered() {
  return {
    type: 'REGISTERED'
  }
}

export function register(email, password, firstName, lastName) {
  return async dispatch => {
    fetch(`http://localhost:8080/user`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        first_name: firstName,
        last_name: lastName
      })
    })
    .then(res => {
      if (res.status === 200) {
        dispatch(login(email, password))
      } else if (res.status === 409) {
        alert("User already exists")
      } else {
        alert("Failed to register")
      }
    })
    .catch(err => {
      alert(err)
    })
  }
}