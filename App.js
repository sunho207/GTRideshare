import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import Login from './src/containers/login/Login'
import Register from './src/containers/login/Register'
import Home from './src/containers/home/Home'
import Scheduled from './src/containers/scheduled/Scheduled'
import Join from './src/containers/join/Join'
import Inbox from './src/containers/inbox/Inbox'
import Profile from './src/containers/profile/Profile'
import rootReducer from './src/reducers/index'

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client)));

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Scheduled: {
    screen: Scheduled
  },
  Join: {
    screen: Join
  },
  Inbox: {
    screen: Inbox
  },
  Profile: {
    screen: Profile
  }
});

const Stack = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Index: {
    screen: Tabs
  }
},{
  headerMode: 'none'
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    );
  }
}