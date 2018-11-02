import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment'
import styles from './styles/Carpool'

class Carpool extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const carpool = this.props.data
    const arrival = moment(carpool.scheduled_arrival, "HH:mm:ss").format("hh:mm a")
    const departure = moment(carpool.scheduled_departure, "HH:mm:ss").format("hh:mm a")
    if (!carpool) {
      return <View></View>
    }
    return (
      <TouchableOpacity style={styles.carpool}>
        <Image
          style={styles.mainProfile}
          source={{uri: 'https://www.billboard.com/files/styles/article_main_image/public/media/jack-dorsey-twitter-headshot-2015-billboard-650.jpg'}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {carpool.name}
          </Text>
          <Text style={styles.schedule}>
            
          </Text>
          <Text style={styles.distance}>
            
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
export default Carpool