import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import styles from './styles/CarpoolItem'

class PendingUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleAccept = () => {
    this.props.handleAccept(this.props.user.id, this.props.user.carpool_id)
  }

  handleReject = () => {
    this.props.handleReject(this.props.user.id, this.props.user.carpool_id)
  }

  render() {
    const user = this.props.user
    return (
      <View style={styles.carpool} >
        <Image
          style={styles.mainProfile}
          source={{uri: user.profile_picture}}
        />
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>
              {user.first_name} {user.last_name}
            </Text>
          </View>
          <Text style={styles.schedule}>
            {user.phone_number}
          </Text>
          <Text style={styles.schedule}>
            {user.address.split(',')[0]}
          </Text>
        </View>
        <TouchableOpacity style={styles.acceptContainer} onPress={() => this.handleAccept()}>
          <View style={styles.acceptIcon}>
            <Icon name="check" size={16} color='#FFF' />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectContainer} onPress={() => this.handleReject()}>
          <View style={styles.rejectIcon}>
            <Icon name="trash" size={16} color='#FFF' />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
export default PendingUser