import React from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import PendingUsers from './PendingUsers'
import _ from 'lodash'
import styles from './styles/ScheduledList'

class PendingList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.users}
          renderItem={({item}) => {
            return (
              <PendingUsers user={item} handleAccept={this.props.handleAccept} handleReject={this.props.handleReject} />
            )
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

export default PendingList