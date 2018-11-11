import React from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import styles from './styles/Carpooler'

class Carpooler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSelect = () => {
    this.props.handleSelect(this.props.carpooler)
  }

  render() {
    return (
      <TouchableOpacity style={styles.profileContainer} onPress={() => this.handleSelect()}>
        <Image
          style={this.props.selected ? styles.profileSelected : styles.profile}
          source={{uri: this.props.carpooler.photoUrl}}
        />
      </TouchableOpacity>
    )
  }
}

export default Carpooler