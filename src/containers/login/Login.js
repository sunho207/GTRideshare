import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles/Login'
import { login } from '../../actions/login'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
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
    }
  }

  handleLogin = () => {
    this.setState({
      loading: true
    })
    this.props.login(this.state.username, this.state.password)
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
        <Text style={styles.inputText}>USERNAME</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.username}
          spellCheck={false}
          autoCapitalize="none"
        />
        <Text style={styles.inputText}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.username}
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
    user: state.login.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)