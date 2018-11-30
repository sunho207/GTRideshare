import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import styles from './styles/CarpoolItem'

class CarpoolItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleView = () => {
    this.props.handleView(this.props.carpool)
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
    const carpool = this.props.carpool
    const arrival = moment(carpool.scheduled_arrival, "HH:mm:ss").format("hh:mm a")
    const departure = moment(carpool.scheduled_departure, "HH:mm:ss").format("hh:mm a")
    const days = this.convertDates(carpool.scheduled_days)
    if (!carpool) {
      return <View></View>
    }
    return (
      <TouchableOpacity style={styles.carpool} onPress={() => this.handleView()}>
        <Image
          style={styles.mainProfile}
          source={{uri: carpool.captain.profile_picture}}
        />
        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>
              {carpool.captain.first_name} {carpool.captain.last_name}
            </Text>
          </View>
          <Text style={styles.schedule}>
            {days} {arrival} to {departure}
          </Text>
          <Text style={styles.distance}>
            
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
export default CarpoolItem