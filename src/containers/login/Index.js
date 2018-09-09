import React from 'react';
import { Image, View, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Index'
import { setUser } from '../../actions/login'

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    this._retrieveUser()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('Tabs')
    }
  }

  _retrieveUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user')
      if (user) {
        this.props.setUser(user)
      }
     } catch (error) {

     }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bgImage}
          resizeMode='contain'
          source={require('../../resources/background.jpg')}
        />
        <View style={styles.bgOverlay} />
        <Image
          style={styles.logoImage}
          resizeMode='contain'
          source={require('../../resources/logo.png')}
        />
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
            style={styles.signupButton}
          >
            <Text style={styles.signupText}>SIGN UP</Text>
          </TouchableOpacity>
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
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)