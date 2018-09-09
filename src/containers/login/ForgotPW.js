import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles/ForgotPW'

class ForgotPW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        sentEmail: false
    }
  }
  emailVC = () => {
    if (this.state.email.slice(-10) === 'gatech.edu') {
      /*send temporary password to email and update the password*/
      this.setState({ sentEmail: true})
    } else {
      alert("Please enter a valid email address")
    }

  };

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
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.backButton} 
          >
            <Icon
              name="arrow-left"
              color='#aaa'
              size={20}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Forgot Password</Text>
          {
            this.state.sentEmail ? 
              (
                <View style={{alignItems: 'center'}}>
                  <Icon
                    name="envelope"
                    color='#888'
                    size={40}
                  />
                  <Text style={styles.resetPWText}>Please check your email inbox!</Text>
                </View>
              ) :
              (
                <View style={{alignItems: 'center'}}>
                  <Icon
                    name="lock"
                    color='#888'
                    size={40}
                  />
                  <Text style={styles.resetPWText}>Enter your email to reset your password</Text>
                  <Text style={styles.inputText}>Email</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                    spellCheck={false}
                    autoCapitalize="none"
                  />
        
                  <TouchableOpacity
                    onPress={this.emailVC}
                    style={styles.submitButton}
                  >
                    <Text style={styles.submitText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              )
          }

        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPW)

