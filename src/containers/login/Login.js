import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles/Login'
import { login } from '../../actions/login'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({
        loading: false
      })
      this.props.navigation.navigate('Tabs')
      try {
        AsyncStorage.setItem('user', JSON.stringify(nextProps.user));
      } catch (error) {
        alert("Unable to store user in local storage")
      }
    }
    if (nextProps.error) {
      this.setState({
        loading: false
      })
      alert("Failed to login")
    }
  }

  handleLogin = () => {
    this.setState({
      loading: true
    })
    this.props.login(this.state.email, this.state.password)
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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Index')}
          style={styles.backButton} 
        >
          <Icon
            name="arrow-left"
            color='#aaa'
            size={20}
          />
        </TouchableOpacity>
        <Text style={styles.inputText}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => this.setState({ email: e.toString()})}
          value={this.state.email}
          spellCheck={false}
          autoCapitalize="none"
        />
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => this.setState({ password: e.toString()})}
          value={this.state.password}
          secureTextEntry
        />
        <TouchableOpacity
          onPress={() => this.handleLogin()}
          style={styles.loginButton}
        >
          {
            this.state.loading ?
              <ActivityIndicator style={styles.loading} size="small" color="#fff" /> :
              <Text style={styles.loginText}>LOGIN</Text>
          }
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPW')}
        >
          <Text style={styles.forgotpwText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    error: state.login.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)