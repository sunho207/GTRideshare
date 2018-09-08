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
        Accept: 'application/json'
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

export const loggedOut = () => ({
  type: 'LOGGED_OUT'
})

export function logout() {
  return async dispatch => {
    dispatch(loggedOut())
  }
}