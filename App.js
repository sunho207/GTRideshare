import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { View } from 'react-native'
import { NativeEventEmitter, NativeModules } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

import Index from './src/containers/login/Index'
import Login from './src/containers/login/Login'
import Register from './src/containers/login/Register'
import ForgotPW from './src/containers/login/ForgotPW'
import Home from './src/containers/home/Home'
import Scheduled from './src/containers/scheduled/Scheduled'
import CarpoolView from './src/containers/scheduled/CarpoolView'
import Join from './src/containers/join/Join'
import Create from './src/containers/join/Create'
import Results from './src/containers/join/Results'
import Filter from './src/containers/join/Filter'
import Inbox from './src/containers/inbox/Inbox'
import Chat from './src/containers/inbox/Chat'
import Profile from './src/containers/profile/Profile'
import EditProfile from './src/containers/profile/EditProfile'
import rootReducer from './src/reducers/index'

const store = createStore(rootReducer, applyMiddleware(thunk));

const ScheduledStack = createStackNavigator({
  Scheduled: {
    screen: Scheduled
  },
  CarpoolView: {
    screen: CarpoolView
  }
}, {
  mode: 'modal'
})

const JoinStack = createStackNavigator({
  Join: {
    screen: Join
  },
  Create: {
    screen: Create
  },
  Results: {
    screen: Results
  },
  Filter: {
    screen: Filter
  }
}, {
  mode: 'modal'
})

const InboxStack = createStackNavigator({
  Inbox: {
    screen: Inbox
  },
  Chat: {
    screen: Chat
  }
}, {
  mode: 'modal'
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile
  },
  EditProfile: {
    screen: EditProfile
  }
}, {
  mode: 'modal'
})

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Scheduled: {
    screen: ScheduledStack
  },
  Join: {
    screen: JoinStack
  },
  Inbox: {
    screen: InboxStack
  },
  Profile: {
    screen: ProfileStack
  }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      let iconSize = 24
      if (routeName === 'Home') {
        iconName = 'home'
      } else if (routeName === 'Scheduled') {
        iconName = 'calendar'
        iconSize = 20
      } else if (routeName === 'Join') {
        iconName = 'plus-circle'
        iconSize = 34
      } else if (routeName === 'Inbox') {
        iconName='inbox'
      } else if (routeName === 'Profile') {
        iconName='user'
      }
      
      return <Icon
        name={iconName}
        color={tintColor}
        size={iconSize}
      />
    },
  }),
  tabBarOptions: {
    activeTintColor: '#64B5F6',
    showLabel: false,
  },
});


const Stack = createStackNavigator({
  Index: {
    screen: Index
  },
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  ForgotPW: {
    screen: ForgotPW
  },
  Tabs: {
    screen: Tabs
  }
}, {
  headerMode: 'none',
  mode: 'modal'
})

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Stack />
        </Provider>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
} 