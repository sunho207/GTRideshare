import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import styles from './styles/CarpoolResult'

class CarpoolResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleSelect = () => {
    this.props.handleSelect(this.props.data)
  }

  render() {
    const carpool = this.props.data
    const arrival = moment(carpool.scheduled_arrival, "HH:mm:ss").format("hh:mm a")
    const departure = moment(carpool.scheduled_departure, "HH:mm:ss").format("hh:mm a")
    if (!carpool) {
      return <View></View>
    }
    return (
      <TouchableOpacity style={styles.carpool} onPress={() => this.handleSelect()}>
        <Image
          style={styles.mainProfile}
          source={{uri: 'https://www.billboard.com/files/styles/article_main_image/public/media/jack-dorsey-twitter-headshot-2015-billboard-650.jpg'}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {carpool.user_firstname} {carpool.user_lastname}
          </Text>
          <Text style={styles.schedule}>
            {carpool.scheduled_days} {arrival} to {departure}
          </Text>
          <Text style={styles.distance}>
            {carpool.route.distance} away
          </Text>
        </View>
        <TouchableOpacity style={styles.messageContainer}>
          <View style={styles.messageIcon}>
            <Icon name="envelope" size={16} color='#FFF' />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}
export default CarpoolResult