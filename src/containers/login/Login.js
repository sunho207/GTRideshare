import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Login'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <Button onPress={() => this.props.navigation.navigate('Index')} title="Button" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)