import { combineReducers } from 'redux'
import login from './login'
import home from './home'
import scheduled from './scheduled'
import join from './join'
import inbox from './inbox'
import profile from './profile'

const appReducer = combineReducers({
  login,
  home,
  scheduled,
  join,
  inbox,
  profile
});

const rootReducer = ( state, action ) => {
  return appReducer(state, action)
}

export default rootReducer