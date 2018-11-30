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

  handleJoin = () => {
    this.props.handleJoin(this.props.data)
  }

  convertDates = (number) => {
    let days = ""
    numberDays = number.toString()
    if (numberDays.includes("0")) {
      days += "Sun, "
    }
    if (numberDays.includes("1")) {
      days += "Mon, "
    } 
    if (numberDays.includes("2")) {
      days += "Tue, "
    }
    if (numberDays.includes("3")) {
      days += "Wed, "
    }
    if (numberDays.includes("4")) {
      days += "Thu, "
    }
    if (numberDays.includes("5")) {
      days += "Fri, "
    }
    if (numberDays.includes("6")) {
      days += "Sat, "
    }
    return days.substring(0, days.length - 2)
  }

  render() {
    const carpool = this.props.data
    const arrival = moment(carpool.scheduled_arrival, "HH:mm:ss").format("hh:mm a")
    const departure = moment(carpool.scheduled_departure, "HH:mm:ss").format("hh:mm a")
    const days = this.convertDates(carpool.scheduled_days)
    if (!carpool) {
      return <View></View>
    }
    return (
      <TouchableOpacity style={styles.carpool} onPress={() => this.handleSelect()}>
        <Image
          style={styles.mainProfile}
          source={{uri: carpool.captain.profile_picture}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {carpool.captain.first_name} {carpool.captain.last_name}
          </Text>
          <Text style={styles.schedule}>
            {days} {arrival} to {departure}
          </Text>
          <Text style={styles.distance}>
            {carpool.route.distance} away
          </Text>
        </View>
        <TouchableOpacity style={styles.messageContainer} onPress={() => this.handleJoin()}>
          <View style={styles.messageIcon}>
            <Icon name="envelope" size={16} color='#FFF' />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}
export default CarpoolResult