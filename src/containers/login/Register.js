import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Register'

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>

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

export default connect(mapStateToProps, mapDispatchToProps)(Register)