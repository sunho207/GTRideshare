import React from 'react';
import { Text, View, Button, Image, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import SettingsList from 'react-native-settings-list'
import Icon from 'react-native-vector-icons/FontAwesome';
import { logout } from '../../actions/login'

import styles from './styles/Profile'

class Profile extends React.Component {

  static navigationOptions = {
    title: 'Profile'
  }

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

  handleEditProfile = () => {
    this.props.navigation.navigate('EditProfile')
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profile}
          source={{uri: this.props.user ? this.props.user.profile_picture : ''}}
        />
        <Text style={styles.profileInfo}>
          {this.props.user && this.props.user.first_name} { this.props.user && this.props.user.last_name}
        </Text>
        <Text style={styles.emailInfo}>
          {this.props.user && this.props.user.email}
        </Text>
        <View style={styles.settingsContainer}>
          <SettingsList borderColor="#eee">
            <SettingsList.Item
              hasNavArrow
              titleStyle={styles.settingsItem}
              title='Edit Profile'
              onPress={this.handleEditProfile}
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