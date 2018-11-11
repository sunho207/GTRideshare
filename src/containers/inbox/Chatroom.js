import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Chatroom';

class Chatroom extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: []
    }
  }

  handleSelect = () => {
    this.props.handleSelect()
  }

  render() {
    return (
      <TouchableOpacity style={styles.chatroom} onPress={() => this.handleSelect()}>
        <Image
          style={styles.profile}
          source={{uri: 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            Andy Kim
          </Text>
          <Text style={styles.message}>
            Hey are you still looking for a carpool still?
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom)