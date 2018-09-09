import React from 'react';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles/Register'
import { register } from '../../actions/login'

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirm: '',
      verifiedEmail: false,
      verifiedPassword: false,
      verifiedConfirm: false
    }
  }

  handleEmail = (e) => {
    this.setState({
      email: e.toString()
    })
    if (e.toString().slice(-10) === 'gatech.edu') {
      this.setState({
        verifiedEmail: true
      })
    } else {
      this.setState({
        verifiedEmail: false
      })
    }
  }

  handlePassword = (e) => {
    this.setState({
      password: e.toString()
    })
    if (e.toString().length >= 6) {
      this.setState({
        verifiedPassword: true
      })
    } else {
      this.setState({
        verifiedPassword: false
      })
    }
  }

  handleConfirm = (e) => {
    this.setState({
      confirm: e.toString()
    })
    if (e.toString() === this.state.password) {
      this.setState({
        verifiedConfirm: true
      })
    } else {
      this.setState({
        verifiedConfirm: false
      })
    }
  }

  handleRegister = () => {
    if (!this.state.verifiedEmail) {
      alert('Please use a gatech.edu email address')
    } else if (!this.state.verifiedPassword) { 
      alert('Please use a password longer than 6 digits')
    } else if (!this.state.verifiedConfirm) {
      alert('Please make sure the passwords match')
    } else {
      this.props.register(this.state.email, this.state.password, this.state.firstName, this.state.lastName)
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

        <Text style={styles.title}>Create New Account</Text>
        <View style={styles.nameContainer}>
          <View style={styles.nameLeftContainer}>
            <Text style={styles.nameInputText}>First Name</Text>
            <TextInput
              style={styles.nameInput}
              onChangeText={e => this.setState({ firstName: e.toString()})}
              value={this.state.firstName}
              spellCheck={false}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.nameRightContainer}>
            <Text style={styles.nameInputText}>Last Name</Text>
            <TextInput
              style={styles.nameInput}
              onChangeText={e => this.setState({ lastName: e.toString()})}
              value={this.state.lastName}
              spellCheck={false}
              autoCapitalize="none"
            />
          </View>
        </View>
        <Text style={styles.inputText}>Georgia Tech Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => this.handleEmail(e)}
          value={this.state.email}
          spellCheck={false}
          autoCapitalize="none"
        />
        <View style={styles.verified}>
          <Icon
            name="check"
            color={ this.state.verifiedEmail ? '#9CCC65' : '#bbb'}
            size={20}
          />
        </View>
        <Text style={styles.inputText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => this.handlePassword(e)}
          value={this.state.password}
          secureTextEntry
        />
        <View style={styles.verified}>
          <Icon
            name="check"
            color={ this.state.verifiedPassword ? '#9CCC65' : '#bbb'}
            size={20}
          />
        </View>
        <Text style={styles.inputText}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={e => this.handleConfirm(e)}
          value={this.state.confirm}
          secureTextEntry
        />
        <View style={styles.verified}>
          <Icon
            name="check"
            color={ this.state.verifiedConfirm ? '#9CCC65' : '#bbb'}
            size={20}
          />
        </View>
        <TouchableOpacity
          onPress={this.handleRegister}
          style={styles.submitButton}
        >
          <Text style={styles.submitText}>Sign Up</Text>
        </TouchableOpacity>
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
    register: (email, password, firstName, lastName) => dispatch(register(email, password, firstName, lastName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)