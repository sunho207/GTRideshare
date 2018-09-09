import React from 'react';
import { Text, View, Button, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import SettingsList from 'react-native-settings-list'
import Icon from 'react-native-vector-icons/FontAwesome';
import { logout } from '../../actions/login'

import styles from './styles/Profile'

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      viewable: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user) {
      this.props.navigation.navigate('Index')
    }
  }

  handleLogout = () => {
    this.props.logout()
    try {
      AsyncStorage.removeItem('user')
    } catch (error) {
    
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profile}
          source={{uri: 'https://www.billboard.com/files/styles/article_main_image/public/media/jack-dorsey-twitter-headshot-2015-billboard-650.jpg'}}
        />
        <Text style={styles.profileInfo}>
          Charlie Deet
        </Text>
        <View style={styles.settingsContainer}>
          <SettingsList borderColor="#eee">
            <SettingsList.Item
              hasNavArrow
              titleStyle={styles.settingsItem}
              title='Edit Profile'
            />
            <SettingsList.Item
              hasNavArrow={false}
              hasSwitch={true}
              switchState={this.state.viewable}
              switchOnValueChange={() => this.setState({
                viewable: !this.state.viewable
              })}
              title='Viewable By Others'
              titleStyle={styles.settingsItem}
            />
            <SettingsList.Item
              hasNavArrow={false}
              hasSwitch={true}
              switchState={this.state.notifications}
              switchOnValueChange={() => this.setState({
                notifications: !this.state.notifications
              })}
              title='Notifications'
              titleStyle={styles.settingsItem}
            />
            <SettingsList.Item
              hasNavArrow={false}
              title='Logout'
              onPress={this.handleLogout}
              titleStyle={styles.settingsItem}
            />
          </SettingsList>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)