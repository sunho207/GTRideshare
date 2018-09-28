import React from 'react';
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapViewDirections from 'react-native-maps-directions';
import { connect } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel'
import styles from './styles/Home'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const origin = {latitude: 37.3318456, longitude: -122.0296002};
    const destination = {latitude: 37.771707, longitude: -122.4053769};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCbKtXYrYUnKnJeOFdAmdZGQ5wI5ogD2gc';

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        </MapView>
        <SlidingUpPanel
          visible
          startCollapsed
          showBackdrop={false}
          allowMomentum
          draggableRange={{
            top: Dimensions.get('window').height - 35,
            bottom: 300
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)