import React from 'react';
import { FlatList, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles/Inbox';
import Chatroom from './Chatroom'

class Inbox extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const title = 'Inbox'
    const headerRight = (
      <Button
        onPress={() => navigation.navigate('NewChat')}
        title="New"
        color="#007AFF"
      />
    )
  
    return {
      title,
      headerRight
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      chatrooms: ["test"]
    }
  }

  handleSelect = () => {
    this.props.navigation.navigate('Chat')
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.chatrooms}
          renderItem={({item}) => {
            return (
              <Chatroom data={item} handleSelect={this.handleSelect} />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Inbox)