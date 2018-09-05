import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Index'

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

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
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)