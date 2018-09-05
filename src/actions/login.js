export function loggedIn(user) {
  return {
    type: 'LOGGED_IN',
    user
  }
}

export function login(username, password) {
  return async dispatch => {
    // fetch(``, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json'
    //   }
    // })
    // .then(res => res.json())
    // .then(json => {
    //   dispatch(loggedIn(json))
    // })
    
    setTimeout(() => {
      dispatch(loggedIn({}))
    }, 1000);
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