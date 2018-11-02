import React from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Location } from 'expo'
import SlidingUpPanel from 'rn-sliding-up-panel'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/HomeSlider'

class HomeSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <SlidingUpPanel
        visible
        startCollapsed
        showBackdrop={false}
        allowMomentum
        draggableRange={{
          top: Dimensions.get('window').height - 35,
          bottom: 280
        }}
      >
        <View style={styles.slider}>
          <View style={styles.row}>
            <Image
              style={styles.profile}
              source={{uri: 'https://www.billboard.com/files/styles/article_main_image/public/media/jack-dorsey-twitter-headshot-2015-billboard-650.jpg'}}
            />
            <View style={styles.driverWrapper}>
              <Text style={styles.driverText}>
                Driving With
              </Text>
              <Text style={styles.driverSubtext}>
                Charlie Deet
              </Text>
            </View>
            <View style={styles.row}>
              <View style={styles.carpoolInfo}>
                <Text style={styles.profileText}>Meet Location</Text>
                <Text style={styles.profileSubtext}>1634 Leona Street</Text>
              </View>
              <View style={styles.carpoolInfo}>
                <Text style={styles.profileText}>Departure Time</Text>
                <Text style={styles.profileSubtext2}>9:00 AM</Text>
              </View>
              <View style={styles.carpoolInfo}>
                <Text style={styles.profileText}>Destination</Text>
                <Text style={styles.profileSubtext}>Peter's Parking Deck</Text>
              </View>
            </View>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Icon.Button name="comment" size={14} color='#555' backgroundColor='rgba(0,0,0,0)'>
                <Text style={styles.buttonText}>
                  Message Carpool
                </Text>
              </Icon.Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Icon.Button name="map" size={14} color='#555' backgroundColor='rgba(0,0,0,0)'>
                <Text style={styles.buttonText}>
                  Open in Maps
                </Text>
              </Icon.Button>
            </TouchableOpacity>
          </View>
        </View>
      </SlidingUpPanel>
    )
  }
}

export default HomeSlider